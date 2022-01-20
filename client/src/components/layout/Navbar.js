import Searchbar from "./Searchbar"
import Logo from "../../images/logo_transparent.png"
import { ClipboardCheckIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"

const icons = [
    {
        title: 'Profilo',
        icon: <UserIcon className="h-6 text-gray-700" />
    },
    {
        title: 'Ordini',
        icon: <ClipboardCheckIcon className="h-6 text-gray-700" />
    },
    {
        title: 'Carrello',
        icon: <ShoppingCartIcon className="h-6 text-gray-700" />
    },
]

const Navbar = () => {
    return (
        <div className="hidden sm:grid sticky top-0 z-40 shadow bg-white text-black w-full h-20 grid-cols-12 items-center justify-items-center content-center">
            <div className="h-28">
                <img src={Logo} className="h-full" alt="logo" />
            </div>
            <div className="col-span-5">
                {

                }
            </div>
            <div className="col-span-5">
                <Searchbar />
            </div>
            <div className="space-x-4">
                {
                    icons.map(i => (
                        <button title={i.title} key={i.title}>
                            {i.icon}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
