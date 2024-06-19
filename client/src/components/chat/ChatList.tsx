import { useSelector } from 'react-redux';
import './ChatList.css';
import { Chat } from '../../modules/chat';
import Icon from '../Icon';
import uuidv4 from '../../util/uuid';

export default function ChatList() {

    const {chatHistory} = useSelector(Chat.get());

    return (
        <div className="chat-list">
            {
                chatHistory &&
                chatHistory.map(chat => {
                    return (
                        <div className="chat-item" key={uuidv4()}>
                            <div className="author">
                                <Icon />
                            </div>

                            <div className="content">
                                {chat.content}
                            </div>

                            <div className="date">{chat.date.getHours()+":"+chat.date.getMinutes()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}