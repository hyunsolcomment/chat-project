import { StatusType } from "./status"

export interface IFriend {

    /** 친구의 현재 상태 */
    status: StatusType

    /** 친구의 상태 메세지 */
    statusMessage?: string | undefined

    /** 친구의 아이디 */
    id: string

    /** 친구의 원래 닉네임 */
    name: string

    /** 사용자가 저장한 친구의 닉네임 */
    aka?: string | undefined

    /** 사용자가 작성한 친구에 대한 메모 */
    note?: string | undefined

    /** 삭제된 유저인지 여부 */
    deleteUser?: boolean

    /** 숨겨진 친구인지 여부 */
    hide?: boolean

    /** DM 시 이용하는 채팅방 아이디 */
    dmChatRoomId: string
}

export interface IBlockedFriend {
    id: string
    name: string
    date: Date
    reason?: string | undefined
}

export interface IRequestFriend {

    /** 친구 요청을 보낸 유저 아이디 */
    fromUserId: string

    /** 친구 요청을 받은 유저 아이디 */
    toUserId: string

    /** 친구 요청 날짜 */
    date: Date
}