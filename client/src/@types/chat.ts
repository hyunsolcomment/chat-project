export enum ChatType {
    TEXT,
    URL,
    IMAGE,
    VIDEO,
    AUDIO
}

export interface IChatHistory {

    /** 보낸 유저 아이디 */
    authorId: string

    /** 채팅 종류 */
    type: ChatType,    

    /** 채팅 내용 */
    content: string

    /** 채팅 최초 작성일 */
    date: Date

    /** 채팅 마지막 수정일 */
    lastEditDate?: Date | undefined
}

export interface IChatRoom {

    /** 채팅방 아이디 */
    id: string

    /** 채팅방 제목 */
    title: string

    /** 채팅방 아이콘 이미지 */
    image?: string | undefined

    /** 채팅방 설명 */
    desc?: string | undefined
}