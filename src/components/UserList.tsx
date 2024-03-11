import { UserListProps } from "../types/Props";
import UserInfo from "./UserInfo";
import List from "./List";

const UserList = ({users}: UserListProps) => {
    return (
        <List>
            <h2 className="font-bold py-4">Users</h2>
            <ul className="list-disc list-inside space-y-4">
                {users.map(user => <UserInfo user={user} />) }
            </ul>
        </List>
    )
}

export default UserList;