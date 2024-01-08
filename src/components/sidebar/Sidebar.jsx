import { sidebarData } from "./data.js";

function Sidebar() {
    return (
        <div className="relative flex flex-col bg-navy text-white h-screen w-full max-w-[14rem]">
            <div className="mb-2 p-4">
                <h5 className="font-inter text-xl font-semibold">Dukaan</h5>
            </div>
            <nav className="flex flex-col gap-1 w-full font-sans text-base font-normal px-2">
                {sidebarData?.map((item, index) => {
                    return (
                        <div key={index} role="button" tabIndex={index} className={`flex items-center w-full rounded-md p-3 text-start leading-tight ${item.isActive ? "bg-navy-light" : ""} transition-all hover:bg-navy-light outline-none font-inter`}>
                            <div className="grid place-items-center mr-4">
                                <img src={item.icon} alt={`${item.title} icon`} />
                            </div>
                            {item.title}
                        </div>
                    );
                })}
            </nav>
        </div>
    )
};

export default Sidebar;