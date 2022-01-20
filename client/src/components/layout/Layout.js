import BottomNavigation from "./BottomNavigation"
import Navbar from "./Navbar"

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="bg-snow min-h-screen w-full mx-auto">
                {props.children}
            </div>
            <BottomNavigation />
        </div>
    )
}

export default Layout
