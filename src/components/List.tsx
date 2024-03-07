import { ListProps } from "../types/Props";

const List = ({ children } : ListProps) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default List;