import { useSelector } from 'react-redux';
import './ChatRoomUserList.css';
import { Chat } from '../../../modules/chat';
import { Friend } from '../../../modules/friend';
import uuidv4 from '../../../util/uuid';
import Icon from '../../Icon';

export default function ChatRoomUserList() {

    const {chatRoomUserList} = useSelector(Chat.get());

    return (
        <div className="cr-user-list">
            {
                chatRoomUserList.map(userId => {
                    const friend = Friend.getFriendById(userId);

                    // 친구일 경우, 모든 정보 표시
                    if(friend) {
                        return (
                            <div className="cr-user" key={uuidv4()}>
                                <Icon status={friend.status} />
                            </div>
                        )
                    } else {
                        <Icon />
                    }
                })
            }
        </div>
    )
}