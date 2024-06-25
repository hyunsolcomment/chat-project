import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatusType } from "../types/status";

interface init {
    id: string
    name: string
    statusMessage?: string | undefined
    status: StatusType
}

export const profileSliceInit: init = {
    id: "parksaehyeon",
    name: "박세현",
    statusMessage: "안녕하세요. 이건 저의 상태 메세지입니다. 만나서 반갑습니다",
    status: StatusType.온라인
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileSliceInit,
    reducers: {
        setId(state, action: PayloadAction<typeof profileSliceInit.id>) {
            state.id = action.payload;
        },

        setName(state, action: PayloadAction<typeof profileSliceInit.name>) {
            state.name = action.payload;
        },

        setStatusMessage(state, action: PayloadAction<typeof profileSliceInit.statusMessage>) {
            state.statusMessage = action.payload;
        },

        setStatusType(state, action: PayloadAction<typeof profileSliceInit.status>) {
            state.status = action.payload;
        }
    }
})