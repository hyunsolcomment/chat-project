import { useSelector } from 'react-redux';
import './ChatList.css';
import { Chat } from 'modules/chat';
import Icon from '../../Icon';
import uuidv4 from 'util/uuid';
import ChatItem from './ChatItem';
import { useEffect, useRef } from 'react';

export default function ChatList() {

    const {chatHistory} = useSelector(Chat.get());
    const refChatList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chatListElement = refChatList.current;

        if(chatListElement) {
            let height = chatListElement.scrollHeight
            console.log(height);

            chatListElement.parentElement!.scrollTo({ top: height, left: 0, behavior: 'smooth' });

        }
    }, [refChatList,chatHistory]);

    return (
        <div className="chat-list" ref={refChatList}>
            {
                chatHistory &&
                chatHistory.map(chat => {
                    return (
                        <ChatItem chat={chat} key={uuidv4()} />
                    )
                })
            }
        </div>
    )
}