import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBlockedFriend, IFriend, IRequestFriend } from "../types/friend";
import { StatusType } from "../types/status";

interface init {
    friendList: IFriend[]
    friendSearch?: string | undefined
    blockedFriendList: IBlockedFriend[]
    friendQuestList: IRequestFriend[]
}

export const friendSliceInit: init = {
    friendList: [
        { name: "박세현", aka: "나의 우주", id: "parksaehyeon", dmChatRoomId: "0",statusMessage: "나랑 놀아줄 사람", status: StatusType.온라인 },
        { name: "이채윤", aka: "이건 내가 정한 이름", id: "leechaeyoon1212", dmChatRoomId: "1",statusMessage: "", status: StatusType.자리비움 },
        { name: "권가온", id: "kwon._.gaon1201", dmChatRoomId: "2",statusMessage: "상태 메세지 테스트 테스트", status: StatusType.바쁨 },
        { name: "안서정", id: "in_seo_jung32", dmChatRoomId: "3",statusMessage: "지금은 공부 중 😅", status: StatusType.오프라인 },
        { name: "박철한", id: "park_iron2020", dmChatRoomId: "4",statusMessage: "1호선 지하철 잘 못 타서 구로역에서 내리고 다시 타야되네", status: StatusType.온라인 },
        { name: "김서연", id: "KSH__2", dmChatRoomId: "5",statusMessage: "친구들과 함께 💖", status: StatusType.온라인 },
        { name: "김규정", id: "KimKyuJung", dmChatRoomId: "6",statusMessage: "책 읽는 중 📚", status: StatusType.자리비움 },
        { name: "이정환", id: "LeeJungHwan1234", dmChatRoomId: "7",statusMessage: "피시방 갈 사람?", status: StatusType.온라인 },
        { name: "박유민", id: "ParkUuM222", dmChatRoomId: "8",statusMessage: "", status: StatusType.바쁨 },
        { name: "강하늘", id: "park.sky.1888", dmChatRoomId: "9",statusMessage: "친구들과 함께 💖", status: StatusType.온라인 },
        { name: "형도", id: "hyungdodo", dmChatRoomId: "10",statusMessage: "", status: StatusType.자리비움, deleteUser: true },
        { name: "안녕 나는", id: "hide1", dmChatRoomId: "11",statusMessage: "", status: StatusType.자리비움, hide: true },
        { name: "숨김처리 된", id: "hide2", dmChatRoomId: "12",statusMessage: "", status: StatusType.자리비움, hide: true },
        { name: "친구야", id: "hide3", dmChatRoomId: "13",statusMessage: "", status: StatusType.자리비움, hide: true },
        { name: "정우", id: "asdasd12", dmChatRoomId: "14",statusMessage: "", status: StatusType.온라인 },
        { name: "슈퍼아이돌 권진광", id: "superidol_2", dmChatRoomId: "15",statusMessage: "피곤함", status: StatusType.온라인 },
        { name: "에피소드", id: "episod", dmChatRoomId: "16",statusMessage: "", status: StatusType.온라인 },
        { name: "시차", id: "time_diff", dmChatRoomId: "17",statusMessage: "헤어지자 말해요", status: StatusType.바쁨 },
        { name: "석류", id: "apple989", dmChatRoomId: "18",statusMessage: "", status: StatusType.오프라인, deleteUser: true },
        { name: "울트론", id: "ulturon", dmChatRoomId: "19",statusMessage: "", status: StatusType.온라인 },
        { name: "캐쳡이", id: "capchav2", dmChatRoomId: "20",statusMessage: "", status: StatusType.자리비움 },
        { name: "캐쳡이캐쳡이캐쳡이캐쳡이캐쳡이", id: "capchav2", dmChatRoomId: "21",statusMessage: "", status: StatusType.자리비움 },
    ],
    blockedFriendList: [],
    friendQuestList: [
        { toUserId: "ddd", fromUserId: "준영", date: new Date() },
        { toUserId: "ddddddddd", fromUserId: "준영", date: new Date() },
        { toUserId: "dddddddddddddddddd", fromUserId: "준영", date: new Date() },
        { toUserId: "ddddddddddddddddddddddddddd", fromUserId: "준영", date: new Date() },
        { toUserId: "dddddddddddddddddddddddddddddddddddd", fromUserId: "준영", date: new Date() },
        { toUserId: "ddddddddd34", fromUserId: "준영", date: new Date() },
        { toUserId: "ddd5", fromUserId: "준영", date: new Date() },
    ]
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState: friendSliceInit,
    reducers: {
        setFriendList(state, action: PayloadAction<typeof friendSliceInit.friendList>) {
            state.friendList = action.payload;
        },

        editFriend(state, action: PayloadAction<IFriend>) {
            let target = state.friendList.find(f => f.id === action.payload.id);

            if(target) {
                target.aka           = action.payload.aka
                target.deleteUser    = action.payload.deleteUser
                target.dmChatRoomId  = action.payload.dmChatRoomId
                target.hide          = action.payload.hide
                target.id            = action.payload.id
                target.name          = action.payload.name
                target.note          = action.payload.note
                target.status        = action.payload.status
                target.statusMessage = action.payload.statusMessage
            }
        },

        setBlockedFriendList(state, action: PayloadAction<typeof friendSliceInit.blockedFriendList>) {
            state.blockedFriendList = action.payload;
        },

        setFriendSearch(state, action: PayloadAction<typeof friendSliceInit.friendSearch | undefined>) {
            state.friendSearch = action.payload;
        },

        setFriendRequestList(state, action: PayloadAction<typeof friendSliceInit.friendQuestList>) {
            state.friendQuestList = action.payload;
        }
    }
})