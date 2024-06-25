import React, { useEffect, useRef, useState } from "react";
import { ChatType, IChatHistory } from "types/chat";
import { Profile } from "modules/profile";
import Icon from "../../Icon";
import { Chat } from "modules/chat";
import { hm2str } from "util/date";

export default function ChatItem({chat}: {chat: IChatHistory}) {

    const [edit,setEdit] = useState<boolean>();
    const refContent = useRef<HTMLDivElement>(null);
    const isMyChat = Profile.getProfile().id === chat.authorId;

    useEffect(() => {
        const contentElement = refContent.current;

        if(contentElement) {

            if(edit) {
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(contentElement);
                range.collapse(false);
                selection!.removeAllRanges();
                selection!.addRange(range);
                contentElement.focus();
            }
        }

    },[edit,refContent]);

    function playEditOutroAnime(callback?: () => void) {
        const ANIME_TIME = 150;

        refContent.current?.animate([
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' },
        ], {
            easing: 'ease',
            fill:'forwards',
            duration: ANIME_TIME
        })

        setTimeout(() => {
            callback?.();
        },ANIME_TIME);
    }

    function playEditIntroAnime(callback?: () => void) {
        const ANIME_TIME = 250;

        refContent.current?.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
        ], {
            easing: 'ease',
            fill:'forwards',
            duration: ANIME_TIME
        })

        setTimeout(() => {
            callback?.();
        },ANIME_TIME);
    }

    function onClick_Content() {

        // 내가 작성한 채팅이 아니라면 편집모드로 진입하지 않기
        if(isMyChat) {
            playEditIntroAnime(() => {
                setEdit(true);
            })
        }
    }

    function onChange_Content(e: React.ChangeEvent<HTMLDivElement>) {
        let newChat: IChatHistory | undefined = undefined;

        switch(chat.type) {
            case ChatType.TEXT:
                newChat = {...chat, content: e.target.innerText}
                break;
        }
    }

    function onBlur_Content() {

        if(!refContent.current) {
            return;
        }

        // 채팅의 텍스트를 수정하는 도중 enter를 누르지 않으면
        // 수정을 취소하기
        if(edit) {

            if(chat.type === ChatType.TEXT) {
                refContent.current.innerHTML = chat.content;
            }

            // 포커스 해제 애니메이션 재생하기
            playEditOutroAnime(() => {
                setEdit(false)
            })
        }
    }

    function onKeyDown_Content(e: React.KeyboardEvent<HTMLDivElement>) {
        const key = e.key.toLowerCase();
        const target = e.target as HTMLElement;

        switch(key) {
            case 'enter':
                e.preventDefault();
                playEditOutroAnime(() => {
                    Chat.editChat({...chat, content: target.innerText, lastEditDate: new Date()})
                })
                break;
        }
    }

    return (
        <div 
            className = "chat-item" 
            data-me   = {Profile.getProfile().id === chat.authorId}
        >
            <div className="author">
                <Icon />
            </div>

            <div 
                className="content" 
                suppressContentEditableWarning={true} 
                contentEditable={edit} 
                ref={refContent} 
                onClick = {onClick_Content} 
                onChange={onChange_Content}
                onKeyDown={onKeyDown_Content}
                spellCheck={false}
                onBlur={onBlur_Content}
            >
                {chat.content}
            </div>

            <div className="date">
                {hm2str(chat.date)}
                {
                    chat.lastEditDate !== undefined &&
                    <div className="edit">
                        {hm2str(chat.lastEditDate)}에 마지막으로 수정됨
                    </div>
                }
            </div>
        </div>
    )
}