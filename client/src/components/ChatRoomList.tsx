import { useSelector } from "react-redux"
import { Chat } from "../modules/chat";
import ChatRoomItem from "./ChatRoomItem";
import uuidv4 from "../util/uuid";
import { useEffect } from "react";

export default function ChatRoomList() {

    const {chatRoomSearch, chatRoomList} = useSelector(Chat.get());
    

    return (
        <div className="cr-list" id="cr-list">
            {
                chatRoomList.map(room => {

                    const dmRoom = Chat.room2friend(room.id);

                    const chatFlag = (
                        Chat.searchText(room.id, chatRoomSearch) ||

                        // 이 채팅방이 DM 채팅방일 경우
                        (
                            dmRoom && (
                                Chat.searchText(dmRoom.aka, chatRoomSearch) ||
                                Chat.searchText(dmRoom.name, chatRoomSearch)
                            )
                        )
                    ) && (
                        
                        // 필수조건
                        !dmRoom?.hide
                    )

                    if(chatFlag) {
                        return (
                            <ChatRoomItem key={uuidv4()} room={room} />
                        )
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}