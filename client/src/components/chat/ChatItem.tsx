import { IChatHistory } from "../../@types/chat";
import Icon from "../Icon";

export default function ChatItem({chat}: {chat: IChatHistory}) {
    return (
        <div className="chat-item">
            <div className="author">
                <Icon />
            </div>

            <div className="content">
                {chat.content}
            </div>
        </div>
    )
}