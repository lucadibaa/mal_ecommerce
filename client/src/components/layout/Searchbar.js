import { SearchIcon } from "@heroicons/react/outline";

const Searchbar = () => {
    return (
        <div className="bg-gray-100 text-gray-800 flex items-center w-96 p-1.5 rounded-lg shadow-lg">
            <input type="text" className="bg-transparent outline-none pl-2 flex-grow" placeholder="Cerca" />
            <SearchIcon className="h-6" />
        </div>
    )
}

export default Searchbar;
