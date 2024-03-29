import helpIcon from "../../assets/icons/Help.svg";
import menuIcon1 from "../../assets/icons/Menu-1.svg";
import menuIcon from "../../assets/icons/Menu.svg";
import SearchInput from "../searchInput/SearchInput";

function Navbar() {
    return (
        <header className="navbar bg-white border-b border-b-[#D9D9D9] font-inter ps-16 lg:ps-4 lg:pe-4 xl:px-10 py-3">
            <div className="navbar-start flex items-center">
                <span className="font-normal mr-3 text-primary text-lg">Payments</span>
                <div className="hidden lg:flex items-center gap-1 text-xs text-secondary">
                    <img src={helpIcon} alt="How it works?" />
                    <span>How it works?</span>
                </div>
            </div>
            <div className="navbar-center w-1/3 hidden md:block">
                <SearchInput
                    placeholder={"Search features, tutorials, etc."}
                />
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-circle">
                    <img src={menuIcon} alt="" />
                </button>
                <button className="btn btn-circle">
                    <img src={menuIcon1} alt="" />
                </button>
            </div>
        </header>
    )
};

export default Navbar;