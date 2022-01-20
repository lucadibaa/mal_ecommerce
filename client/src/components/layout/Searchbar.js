import { SearchIcon } from "@heroicons/react/outline";

const Searchbar = () => {
    return (
        <div className="bg-gray-100 text-gray-800 flex items-center w-96 p-2 rounded-lg shadow">
            <input type="text" className="bg-transparent outline-none pl-2 flex-grow placeholder:text-gray-400" placeholder="Cerca" />
            <SearchIcon className="h-6 text-gray-400" />
        </div>
    )
}

export default Searchbar;
