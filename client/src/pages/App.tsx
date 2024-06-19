import FriendList from "../components/FriendList";
import ChatRoomList from "../components/ChatRoomList";
import './App.css';
import { Friend } from "../modules/friend";
import ChatRoomSearch from "../components/ChatRoomSearch";
import SideProfile from "../components/SideProfile";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chat/ChatRoom";
import { useSelector } from "react-redux";
import { Chat } from "../modules/chat";
import ChatRoomUserList from "../components/chat/user-list/ChatRoomUserList";

enum State {
    IDLE,
    CHAT
}

export default function App() {
    
    const [state,setState] = useState<State>(State.IDLE);
    
    const {chatRoomId} = useSelector(Chat.get());

    useEffect(() => {
        if(chatRoomId) {
            setState(State.CHAT)
        }
    },[chatRoomId]);

    return (
        <div className="app">
            
            <div className="left">
                <SideProfile />
                <ChatRoomSearch />
                <ChatRoomList />
            </div>

            <div className="center">
                {
                    state === State.CHAT &&
                    <ChatRoom />
                }
            </div>

            <div className="right">
                {
                    state === State.CHAT &&
                    <ChatRoomUserList />
                }
            </div>
        </div>
    )
}