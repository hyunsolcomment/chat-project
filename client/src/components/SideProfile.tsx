import { useSelector } from "react-redux"
import { Profile } from "../modules/profile";
import Icon from "./Icon";

export default function SideProfile() {
    const me = useSelector(Profile.get());
    const {name,id, status} = me;

    return (
        <div className="profile">
            <Icon status={status} />

            <div className="text">
                <div className="name">
                    <div className="name">{name}</div>
                    <div className="id">@{id}</div>
                </div>
            </div>
        </div>
    )
}