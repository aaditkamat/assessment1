import { Fragment } from "react/jsx-runtime";
import { UserInfoProps } from "../types/Props";

const UserInfo = ({user}: UserInfoProps) => {
    return (
       <Fragment>
            <li key={user.id}>Name: {user.name}, Username: {user.username} </li>
        </Fragment>
    )
}

export default UserInfo;