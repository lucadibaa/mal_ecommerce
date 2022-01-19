import BottomNavigation from "./BottomNavigation"
import Navbar from "./Navbar"

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FFFCFF] min-h-screen max-w-xs mx-auto">
                {props.children}
            </div>
            <BottomNavigation />
        </div>
    )
}

export default Layout
