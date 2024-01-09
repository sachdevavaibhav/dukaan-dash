function StatCard({title, value}) {
    return (
        <div className="stats shadow w-full bg-white">

            <div className="stat py-5 font-inter">
                <div className="stat-title mb-5 text-base font-normal">{title}</div>
                <div className="stat-value font-medium">{value}</div>
            </div>

        </div>
    )
};

export default StatCard;