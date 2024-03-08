import { ListProps } from "../types/Props";

const List = ({ children } : ListProps) => {
    return (
        <div className="basis-1/2 bg-white shadow-xl shadow-xl ring-1 ring-gray-900/5 overflow-y-auto">
            { children }
        </div>
    )
}

export default List;