import { useSelector } from "react-redux"
import { Friend } from "../modules/friend";
import FriendItem from "./FriendItem";
import uuidv4 from "../util/uuid";

export default function FriendList() {

    const { friendList } = useSelector(Friend.get());

    return (
        <div className="friend-list">
            {
                friendList.map(friend => (
                    <FriendItem key={uuidv4()} friend={friend} />
                ))
            }
        </div>
    )
}