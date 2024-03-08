import List from "./List";
import AuthorInfo from "./AuthorInfo";
import { AuthorListProps } from "../types/Props";

const AuthorList = ({authors}: AuthorListProps) => {
    return (
        <List>
            <h2 className="font-bold py-4">Authors</h2>
            <ol className="list-decimal list-inside space-y-4">
                {authors.map(author => <AuthorInfo author={author}/>)}
            </ol>
        </List>
    )
}

export default AuthorList;