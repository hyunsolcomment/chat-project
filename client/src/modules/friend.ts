import { IFriend } from "../@types/friend";
import { friendSlice } from "../store/friend";
import { RootState, store } from "../store/store";

export class Friend {

    static get() {
        return (state: RootState) => state.friend
    }

    static getFriendById(userId: string) {
        return store.getState().friend.friendList.find(f => f.id === userId);
    }

    /**
     * 친구 요청을 전송합니다.
     * @param userId 대상의 유저 아이디
     */
    static async request(userId: string) {

    }

    /**
     * 친구 요청을 취소합니다.
     * @param targetId 친구 요청 대상 유저 아이디
     */
    static async requestCancel(targetId: string) {

    }

    /**
     * 특정 친구 요청을 거절합니다.
     * @param targetId 대상 유저 아이디
     */
    static async requestDeny(targetId: string) {

    }

    /**
     * 특정 친구 요청을 수락합니다.
     * @param targetId 대상 유저 아이디
     */
    static async requestAccept(targetId: string) {

    }

    /**
     * 현재 친구 목록을 다시 로드합니다.
     */
    static async loadFriendList() {
        
    }

    /**
     * 차단한 유저 목록을 다시 로드합니다.
     */
    static async loadBlockedFriendList() {

    }

    /**
     * 특정 유저를 차단합니다.
     */
    static async block(friend: IFriend) {
    }

    /**
     * 특정 유저를 차단 해제합니다.
     */
    static async unBlock(friend: IFriend) {

    }

    /**
     * 특정 친구에 대한 정보를 수정합니다.
     */
    static async editFriend(friend: IFriend) {
        store.dispatch(friendSlice.actions.editFriend(friend));
    }

    static getNoteByUserId(userId: string) {
        return store.getState().friend.friendList.find(u => u.id === userId)?.note
    }
}