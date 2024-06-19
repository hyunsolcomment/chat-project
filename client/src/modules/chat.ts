import { IChatRoom } from "../@types/chat";
import { chatSlice, chatSliceInit } from "../store/chat";
import { RootState, store } from "../store/store";

export class Chat {
    static get() {
        return (state: RootState) => state.chat
    }

    static getChatSaveByRoomId(roomId: string) {
        return store.getState().chat.chatSaves[roomId]
    }

    static setChatRoomSearch(value: typeof chatSliceInit.chatRoomSearch | undefined) {
        store.dispatch(chatSlice.actions.setChatRoomSearch(value));
    }

    static loadChatRoomList() {
        
    }

    static addChatRoom(room: IChatRoom) {
        store.dispatch(chatSlice.actions.addChatRoom(room))
    }

    static setChatRoomUserList(value: typeof chatSliceInit.chatRoomUserList) {
        store.dispatch(chatSlice.actions.setChatRoomUserList(value))
    }

    static getChatRoomById(roomId: string | undefined) {
        if(!roomId) {
            return undefined;
        }
        
        return store.getState().chat.chatRoomList.find(room => room.id === roomId)
    }

    static removeChatRoom(room: IChatRoom) {
        store.dispatch(chatSlice.actions.removeChatRoom(room))
    }

    static removeChatRoomById(roomId: string) {
        store.dispatch(chatSlice.actions.removeChatRoom(roomId))
    }

    static isDM(roomId: string) {
        return store.getState().friend.friendList.find(f => f.dmChatRoomId === roomId) !== undefined;
    }

    static room2friend(room: string | IChatRoom) {
        room = typeof room === 'string' ? room : room.id;

        return store.getState().friend.friendList.find(f => f.dmChatRoomId === room);
    }

    /** 소스 텍스트로부터 특정 텍스트를 검색하여 검색 결과로 보이는 여부를 반환 */
    static searchText(sourceText: string | undefined, searchText: string | undefined) {

        if(!searchText) {
            return true;
        }

        if(!sourceText) {
            return !searchText;
        }

        for(let word of searchText.split(" ")) {
            if(word && sourceText.includes(word)) {
                return true;
            }
        }

        return false;
    }
}