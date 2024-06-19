import React from "react";
import { Friend } from "../modules/friend";
import { Chat } from "../modules/chat";

export default function ChatRoomSearch() {

    function onChange_SearchInput(e: React.ChangeEvent<HTMLInputElement>) {
        Chat.setChatRoomSearch(e.target.value);
    }

    return (
        <div className="cr-search">
            <input type="text" placeholder="검색어를 입력해주세요." onChange={onChange_SearchInput}/>
            <button>
                <img src="img/search.png" />
            </button>
        </div>
    )
}