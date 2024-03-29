import { Fragment } from "react/jsx-runtime";
import { AuthorInfoProps } from "../types/Props";

const AuthorInfo = ({author}: AuthorInfoProps) => {
    return (
        <Fragment>
            <li key={author.id}> {author.name} </li>
        </Fragment>
    );
}

export default AuthorInfo;