import Header from "../../components/header/Header"
import StatCard from "../../components/statCard/StatCard";
import Table from "./components/Table";
import Pagination from "./components/Pagination.jsx";
import SearchInput from "../../components/searchInput/SearchInput.jsx";
import {data} from "./data.js"
import sortIcon from "../../assets/icons/Sort.svg";
import downloadIcon from "../../assets/icons/download.svg";
import downArrowIcon from "../../assets/icons/arrow.svg";

function Payments() {
    return (
        <div className="w-full lg:ps-52 xl:ps-56">
            <Header/>
            <section className="px-4 xl:px-10 pt-10">
                <div className="flex justify-between mb-7">
                    <h2 className="text-xl font-inter font-medium text-primary">Overview</h2>
                    <button className="btn no-animation bg-transparent text-secondary font-medium text-sm border border-[#D9D9D9] hover:border-[#D9D9D9] hover:bg-transparent">
                        Last Month
                        <img src={downArrowIcon} />
                    </button>
                </div>
                <div className="flex justify-between gap-8 mb-7">
                    <StatCard title="Online orders" value="231" />
                    <StatCard title="Amount received" value="₹23,92,312.19" />
                </div>
                <div className="mb-7">
                    <p className="text-xl font-inter font-medium text-primary">Transaction | This Month</p>
                </div>
                <div className="mb-7 bg-white rounded-lg p-5">
                    <div className="w-full flex justify-between mb-3">
                        <div>
                            <SearchInput placeholder="Search by order id ..." classes="bg-transparent border border-[#D9D9D9] focus:border-[#D9D9D9] placeholder:text-[#999] font-normal" />
                        </div>
                        <div className="flex gap-4">
                            <button className="btn no-animation bg-transparent text-secondary font-medium text-sm border border-[#D9D9D9] hover:border-[#D9D9D9] hover:bg-transparent">
                                Sort
                                <img src={sortIcon} alt="previous" />
                            </button>
                            <button className="btn no-animation bg-transparent text-secondary font-medium text-sm border border-[#D9D9D9] hover:border-[#D9D9D9] hover:bg-transparent">
                                <img src={downloadIcon} alt="previous" />
                            </button>
                        </div>
                    </div>
                    <Table data={data} />
                    <div className="w-full flex justify-center mt-5">
                        <Pagination />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Payments;