import { useSelector } from "react-redux"
import { Chat } from "../../../modules/chat";
import './ChatRoomHeader.css';
import Icon from "../../Icon";

export default function ChatRoomHeader() {

    const {chatRoomId} = useSelector(Chat.get());

    const room = Chat.getChatRoomById(chatRoomId);

    if(!room) {
        return null;
    }

    return (
        <header>
            <Icon height={35} />

            <div className="text">
                <div className="name">{room.title ? room.title : "이름없는 그룹채팅"}</div>
                <img className="right" src="img/right_arrow.png" />
                <div className="desc">{room.desc ?? "채팅방 설명이 없어요."}</div>
            </div>
        </header>
    )
}