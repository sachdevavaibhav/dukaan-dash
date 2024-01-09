import { sidebarData } from "./data.js";
import nishyanLogo from "../../assets/nishyan-logo.png";
import chevronDownIcon from "../../assets/icons/chevronDown.svg";
import walletIcon from "../../assets/icons/wallet.svg";

function Sidebar() {
    return (
        <div className="fixed left-0 flex flex-col bg-navy text-white h-screen w-full max-w-[14rem]">
            <div className="mb-2 p-4 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={nishyanLogo} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h5 className="text-base font-inter font-medium">Nishyan</h5>
                        <span className="text-xs font-inter font-normal underline">Visit Store</span>
                    </div>
                </div>
                <div role="button">
                    <img src={chevronDownIcon} />
                </div>
            </div>
            <nav className="flex flex-col gap-1 w-full font-sans text-base font-normal px-2">
                {sidebarData?.map((item, index) => {
                    return (
                        <div key={index} role="button" tabIndex={index} className={`flex items-center w-full rounded-md p-3 text-start font-medium leading-tight ${item.isActive ? "bg-navy-light" : ""} transition-all hover:bg-navy-light outline-none font-inter`}>
                            <div className="grid place-items-center mr-4">
                                <img src={item.icon} alt={`${item.title} icon`} />
                            </div>
                            {item.title}
                        </div>
                    );
                })}
            </nav>
            <div className="flex items-center gap-4 p-3 mx-3 bg-navy-light rounded-md mt-auto mb-3">
                <div className="bg-[#ffffff1a] p-2 rounded-md">
                    <img src={walletIcon} className="w-full" alt="Wallet Icon" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-inter">Available Credits</span>
                    <span className="text-base font-inter font-medium">222.10</span>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;