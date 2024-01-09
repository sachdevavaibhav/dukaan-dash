
import SidebarContent from "./SidebarContent.jsx";
import hamburgerIcon from "../../assets/icons/hamburger.svg";

function Sidebar() {
    return (
        <>
            <div className="drawer absolute top-[2%] left-3">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button">
                            <img src={hamburgerIcon} alt="" />
                        </label>
                    </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex flex-col bg-navy text-white h-screen w-full max-w-[13rem] xl:max-w-[14rem]">
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