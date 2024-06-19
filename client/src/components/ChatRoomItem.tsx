import { useSelector } from "react-redux";
import { IChatRoom } from "../@types/chat";
import { Chat } from "../modules/chat";
import { Friend } from "../modules/friend";
import Icon from "./Icon";

export default function ChatRoomItem({room}: {room: IChatRoom}) {

    const {friendList} = useSelector(Friend.get());
    const friend = Chat.room2friend(room);

    return (
        <div className="cr-item">
            {
                friend &&
                <>
                    <Icon status={friend.status}/>

                    <div className="text">
                        <div className="name">{friend.aka ?? friend.name}</div>
                        <div className="status-message">{friend.statusMessage}</div>
                    </div>
                </>
            }
            {
                !friend &&
                <>
                    <div className="icon">
                        <div className="image">
                            
                        </div>
                    </div>

                    <div className="text">
                        <div className="name">{room.title}</div>
                    </div>
                </>
            }
        </div>
    )
}