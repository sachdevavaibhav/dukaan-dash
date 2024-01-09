import triangleIcon from '../../../assets/icons/Triangle-Icon.svg';
import infoIcon from '../../../assets/icons/Info.svg';

function Table({data}) {
    return (
        <div className="overflow-x-auto">
            <table className="table font-inter">
                {/* head */}
                <thead>
                    <tr className="bg-[#F2F2F2] border-none text-secondary font-medium text-sm">
                        <th>Order ID</th>
                        <th className='flex gap-2'>Order Date <img src={triangleIcon} /> </th>
                        <th className='text-right'>Order Amount</th>
                        <th className='flex gap-2 justify-end'>Transaction fees <img src={infoIcon} /> </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                    return (
                        <tr key={index} className='font-medium text-sm text-primary'>
                            <td className='text-link'><a href="#">{item.orderId}</a></td>
                            <td>{item.orderDate}</td>
                            <td className='text-right'>{item.orderAmount}</td>
                            <td className='text-right'>{item.fees}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;