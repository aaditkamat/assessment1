import { UserListProps } from "../types/Props";
import UserInfo from "./UserInfo";
import List from "./List";

const UserList = ({users}: UserListProps) => {
    return (
        <List>
            <h2>Users</h2>
            <ul>
                {users.map(user => <UserInfo user={user} />) }
            </ul>
        </List>
    )
}

export default UserList;