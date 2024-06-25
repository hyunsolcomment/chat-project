import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatType, IChatHistory, IChatRoom } from "../types/chat";
import { Chat } from "../modules/chat";

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
        Chat.createChatHistory({ 
            authorId:"leechaeyoon1212",
            content: "안녕"
        }),
        Chat.createChatHistory({ 
            authorId:"kwon._.gaon1201",
            content: "다들 반가워"
        }),
        Chat.createChatHistory({ 
            authorId:"kwon._.gaon1201",
            content: "다들 반가워22"
        }),
        Chat.createChatHistory({ 
            authorId:"kwon._.gaon1201",
            content: "다들 반가워333333"
        }),
        Chat.createChatHistory({ 
            authorId:"kwon._.gaon1201",
            content: "다들 반가워4444444"
        }),
        Chat.createChatHistory({ 
            authorId:"ParkUuM222",
            content: "채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트 채팅 테스트"
        })
    ],
    typingUserList: [],
    chatRoomUserList: [],
    chatSaves: {},
    chatRoomList: [
        { id: "2", title: "", users: ["parksaehyeon"] },
        { id: "3", title: "", users: ["parksaehyeon"] },
        { id: "4", title: "", users: ["parksaehyeon"] },
        { id: "5", title: "", users: ["parksaehyeon"] },
        { id: "6", title: "", users: ["parksaehyeon"] },
        { id: "7", title: "", users: ["parksaehyeon"] },
        { id: "8", title: "", users: ["parksaehyeon"] },
        { id: "9", title: "", users: ["parksaehyeon"] },
        { id: "10", title: "", users: ["parksaehyeon"] },
        { id: "12", title: "", users: ["parksaehyeon"] },
        { id: "13", title: "", users: ["parksaehyeon"] },
        { id: "14", title: "", users: ["parksaehyeon"] },
        { id: "15", title: "", users: ["parksaehyeon"] },
        { id: "16", title: "", users: ["parksaehyeon"] },
        { id: "17", title: "", users: ["parksaehyeon"] },
        { id: "18", title: "", users: ["parksaehyeon"] },
        { id: "19", title: "", users: ["parksaehyeon"] },
        { id: "20", title: "", users: ["parksaehyeon","kwon._.gaon1201","hyungdodo"] },
        { id: "21", title: "", users: ["parksaehyeon"] },
        { id: "22", title: "dddd", users: ["parksaehyeon"] },
        { id: "23", title: "그룹 채팅방 1", users: ["parksaehyeon"] },
        { id: "24", title: "그룹 채팅방 3", users: ["parksaehyeon"] },
        { id: "25", title: "그룹 채팅방 4", users: ["parksaehyeon"] },
        { id: "26", title: "그룹 채팅방 5 dddddddddddddddddd", users: ["parksaehyeon"] },
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

        addChat(state, action: PayloadAction<IChatHistory>) {
            state.chatHistory.push(action.payload)
        },

        removeChat(state, action: PayloadAction<string>) {
            state.chatHistory = state.chatHistory.filter(c => c.uuid !== action.payload);
        },

        editChat(state, action: PayloadAction<IChatHistory>) {
            const chat = state.chatHistory.find(c => c.uuid === action.payload.uuid)

            if(chat) {
                chat.authorId     = action.payload.authorId
                chat.content      = action.payload.content
                chat.date         = action.payload.date
                chat.lastEditDate = new Date()
                chat.type         = action.payload.type
            }
        }
    }
})