import { IFriend } from "../types/friend";
import Icon from "./Icon";

export default function FriendItem({friend}: {friend: IFriend}) {
    return (
        <div className="friend-item">
            <Icon status={friend.status} />

            <div className="text">
                <div className="name"></div>
                <div className="status-message">{friend.statusMessage}</div>
            </div>
        </div>
    )
}