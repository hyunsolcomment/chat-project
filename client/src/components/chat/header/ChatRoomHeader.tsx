import { useSelector } from "react-redux"
import { Chat } from "modules/chat";
import './ChatRoomHeader.css';
import Icon from "../../Icon";
import { Friend } from "modules/friend";
import { useState } from "react";
import uuidv4 from "util/uuid";

export default function ChatRoomHeader() {

    const {chatRoomId} = useSelector(Chat.get());

    const room = Chat.getChatRoomById(chatRoomId);

    if(!room) {
        return null;
    }

    const userList = room.users.map(id => Friend.getFriendById(id));

    return (
        <header>
            <Icon height={35} />

            <div className="text">
                <div className="name">{room.title ? room.title : "이름없는 그룹채팅"}</div>
                <img className="right" src="img/right_arrow.png" />
                <div className="desc">{room.desc ?? "채팅방 설명이 없어요."}</div>
            </div>

            <div className="user-list">
                {
                    userList.map(userId => (
                        <Icon key={uuidv4()}/>
                    ))
                }
            </div>

            <div className="menu">
                <img src="img/menu.png" />
            </div>
        </header>
    )
}