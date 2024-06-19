import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatType, IChatHistory, IChatRoom } from "../@types/chat";

interface init {

    /** 현재 채팅방에 대한 채팅 목록 */
    chatHistory: IChatHistory[]

    /** 채팅방 검색어 */
    chatRoomSearch?: string | undefined

    /** 현재 채팅방 아이디 */
    chatRoomId?: string | undefined

    /** 소속된 채팅방 아이디 목록 */
    chatRoomList: IChatRoom[]

    /** 현재 채팅방에서 채팅을 입력 중인 유저 아이디 목록 */
    typingUserList: string[]

    /** 현재 채팅방에 소속된 유저 목록 */
    chatRoomUserList: string[]

    /** 채팅방에서 입력 중인 채팅 */
    chatSaves: { [chatRoomId: string]: string }
}

export const chatSliceInit: init = {
    chatRoomId: "20",
    chatHistory: [
        { authorId: "leechaeyoon1212", type: ChatType.TEXT, content: "안녕", date: new Date() },
        { authorId: "kwon._.gaon1201", type: ChatType.TEXT, content: "다들 반가워", date: new Date() },
        { authorId: "kwon._.gaon1201", type: ChatType.TEXT, content: "다들 반가워22", date: new Date() },
        { authorId: "kwon._.gaon1201", type: ChatType.TEXT, content: "다들 반가워333333", date: new Date() },
        { authorId: "kwon._.gaon1201", type: ChatType.TEXT, content: "다들 반가워4444444", date: new Date() },
        { authorId: "ParkUuM222", type: ChatType.TEXT, content: "채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 ", date: new Date() },
    ],
    typingUserList: [],
    chatRoomUserList: [],
    chatSaves: {},
    chatRoomList: [
        { id: "2", title: "" },
        { id: "3", title: "" },
        { id: "4", title: "" },
        { id: "5", title: "" },
        { id: "6", title: "" },
        { id: "7", title: "" },
        { id: "8", title: "" },
        { id: "9", title: "" },
        { id: "10", title: "" },
        { id: "12", title: "" },
        { id: "13", title: "" },
        { id: "14", title: "" },
        { id: "15", title: "" },
        { id: "16", title: "" },
        { id: "17", title: "" },
        { id: "18", title: "" },
        { id: "19", title: "" },
        { id: "20", title: "" },
        { id: "21", title: "" },
        { id: "22", title: "dddd" },
        { id: "23", title: "그룹 채팅방 1" },
        { id: "24", title: "그룹 채팅방 3" },
        { id: "25", title: "그룹 채팅방 4" },
        { id: "26", title: "그룹 채팅방 5 dddddddddddddddddd" },
    ]
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState: chatSliceInit,
    reducers: {
        setChatRoomList(state, action: PayloadAction<typeof chatSliceInit.chatRoomList>) {
            state.chatRoomList = action.payload;
        },

        addChatRoom(state, action: PayloadAction<IChatRoom>) {
            if(!state.chatRoomList.find(room => room.id === action.payload.id)) {
                state.chatRoomList.push(action.payload);
            }
        },

        removeChatRoom(state, action: PayloadAction<IChatRoom | string>) {
            let targetId = typeof action.payload !== 'string' ? action.payload.id : action.payload;

            state.chatRoomList = state.chatRoomList.filter(room => room.id !== targetId);
        },
        
        setChatRoomUserList(state, action: PayloadAction<typeof chatSliceInit.chatRoomUserList>) {
            state.chatRoomUserList = action.payload;
        },

        setChatRoomInput(state, action: PayloadAction<typeof chatSliceInit.chatSaves>) {
            state.chatSaves = action.payload;
        },

        setChatRoomSearch(state, action: PayloadAction<typeof chatSliceInit.chatRoomSearch>) {
            state.chatRoomSearch = action.payload;
        },

        setChatRoomId(state, action: PayloadAction<typeof chatSliceInit.chatRoomId>) {
            state.chatRoomId = action.payload;
        },

        setTypingUserList(state, action: PayloadAction<typeof chatSliceInit.typingUserList>) {
            state.typingUserList = action.payload;
        },

        addTypingUser(state, action: PayloadAction<string>) {
            if(!state.typingUserList.includes(action.payload)) {
                state.typingUserList.push(action.payload)
            }
        },

        removeTypingUser(state, action: PayloadAction<string>) {
            state.typingUserList = state.typingUserList.filter(e => e !== action.payload);
        },

        
    }
})