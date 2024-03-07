import List from "./List";
import AuthorInfo from "./AuthorInfo";
import { AuthorListProps } from "../types/Props";

const AuthorList = ({authors}: AuthorListProps) => {
    return (
        <List>
            <h2>Authors</h2>
            <ol style={{listStyle: 'number'}}>
                {authors.map(author => <AuthorInfo author={author}/>)}
            </ol>
        </List>
    )
}

export default AuthorList;