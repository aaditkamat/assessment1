import  { ReactNode } from "react";
import { Author } from "./Author";
import { User } from "./User";

export type FormProps = {
    onSubmit: (author: Author) => void;
}

export type ListProps = {
    children: ReactNode;
}
export type AuthorListProps = {
    authors: Author[];
}

export type UserListProps = {
    users: User[];
}

export type UserInfoProps = {
    user: User;
}

export type AuthorInfoProps = {
    author: Author;
}