import { Fragment } from "react/jsx-runtime";
import { UserInfoProps } from "../types/Props";

const UserInfo = ({user}: UserInfoProps) => {
    return (
       <Fragment>
            <li key={user.id}>{user.name}</li>
            <li key={user.id}>{user.username}</li>
        </Fragment>
    )
}

export default UserInfo;