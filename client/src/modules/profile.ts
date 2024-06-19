import { StatusType } from "../@types/status";
import { profileSlice, profileSliceInit } from "../store/profile";
import { RootState, store } from "../store/store";

export class Profile {

    static get() {
        return (state: RootState) => state.profile;
    }
    static setStatusMessage(value: typeof profileSliceInit.statusMessage | undefined) {
        store.dispatch(profileSlice.actions.setStatusMessage(value));
    }

    static setName(value: typeof profileSliceInit.name) {
        store.dispatch(profileSlice.actions.setName(value));
    }

    static setId(value: typeof profileSliceInit.id) {
        store.dispatch(profileSlice.actions.setId(value));
    }
    
    static setStatusType(status: StatusType) {
        store.dispatch(profileSlice.actions.setStatusType(status));
    }
}