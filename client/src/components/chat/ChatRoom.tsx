import ChatRoomFooter from "./footer/ChatRoomFooter";
import ChatRoomHeader from "./header/ChatRoomHeader";
import './ChatRoom.css';
import ChatList from "./chat-list/ChatList";

export default function ChatRoom() {
    return (
        <div className="chat">
            <ChatRoomHeader />

            <section>
                <ChatList />
            </section>

            <ChatRoomFooter />
        </div>
    )
}