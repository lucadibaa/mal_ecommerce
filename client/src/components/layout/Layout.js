import BottomNavigation from "./BottomNavigation"

const Layout = (props) => {
    return (
        <div className="bg-[#FFFCFF] min-h-screen max-w-xs mx-auto">
            {props.children}
            <BottomNavigation />
        </div>
    )
}

export default Layout
