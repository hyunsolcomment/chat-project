import { useRef } from 'react';
import './ChatRoomFooter.css';
import { Chat } from 'modules/chat';
import { Profile } from 'modules/profile';

export default function ChatRoomFooter() {

    const ref = useRef<HTMLTextAreaElement>(null);

    function onSubmit() {
        if(ref.current) {
            const value = ref.current.value
            Chat.addChat(Chat.createChatHistory({
                authorId: Profile.getProfile().id,
                content: value
            }));
        }
    }

    return (
        <footer>
            <textarea ref={ref}></textarea>
            <button className="send-btn" onClick={onSubmit}>
                <img src="img/send.png" />
            </button>
        </footer>
    )
}