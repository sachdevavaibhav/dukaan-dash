import Header from "../../components/header/Header"
import StatCard from "../../components/statCard/StatCard";
import Table from "./components/Table";
import {data} from "./data.js"

function Payments() {
    return (
        <div className="w-full ps-56">
            <Header/>
            <section className="px-10 pt-10">
                <div className="flex justify-between mb-7">
                    <h2 className="text-xl font-inter font-medium text-primary">Overview</h2>
                    <h2 className="text-xl font-inter font-medium text-primary">Overview</h2>
                </div>
                <div className="flex justify-between gap-8 mb-7">
                    <StatCard title="Online orders" value="231" />
                    <StatCard title="Amount received" value="₹23,92,312.19" />
                </div>
                <div className="mb-7">
                    <p className="text-xl font-inter font-medium text-primary">Transaction | This Month</p>
                </div>
                <div className="mb-7 bg-white rounded-lg p-5">
                    <Table data={data} />
                </div>
            </section>
        </div>
    )
};

export default Payments;