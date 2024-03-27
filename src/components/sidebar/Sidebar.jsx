
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Sidebar = () => {

    // TODO : Making it responsive and converting to hamburger menu


    return (
        <div className="h-full">
            <MobileNav />
            <DesktopNav />
        </div>
    )
}

export default Sidebar