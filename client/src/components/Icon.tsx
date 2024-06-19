import { IFriend } from "../@types/friend";
import { StatusType } from "../@types/status";
import './Icon.css';

interface IProps {
    image?: string
    status?: StatusType | undefined
    height?: number | undefined
}

export default function Icon({status, image, height}: IProps) {
    return (
        <div className="icon">
            <div className="image" style={height !== undefined ? {width: height, height: height} : undefined}>
                {
                    image &&
                    <img src={image} />
                }
            </div>

            {
                status &&
                <div 
                    className="status" 
                    data-status={status}
                />
            }
        </div>
    )
}