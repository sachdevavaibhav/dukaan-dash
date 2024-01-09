
import SidebarContent from "./SidebarContent.jsx";
import hamburgerIcon from "../../assets/icons/hamburger.svg";

function Sidebar() {
    return (
        <>
            <div className="drawer absolute lg:hidden top-4 left-3 overflow-hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="drawer-button block h-full">
                            <img src={hamburgerIcon} alt="Navigation Menu" />
                        </label>
                    </div>
                    <div className="drawer-side z-50 h-full">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="fixed left-0 flex flex-col bg-navy text-white h-full w-full max-w-[13rem] xl:max-w-[14rem] overflow-hidden">
                            <SidebarContent/>
                        </div>
                    </div>
            </div>
            <div className="fixed hidden lg:flex left-0 flex-col bg-navy text-white h-screen w-full max-w-[13rem] xl:max-w-[14rem]">
                <SidebarContent />
            </div>
        </>
    )
};

export default Sidebar;