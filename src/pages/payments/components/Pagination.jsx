import prevIcon from '../../../assets/icons/prev.svg';
import nextIcon from '../../../assets/icons/next.svg';

function Pagination() {
    return (
        <div className="flex gap-5 items-center">
            <div>
                <button className="btn no-animation bg-transparent text-secondary font-medium text-xs xl:text-sm border border-[#D9D9D9] hover:border-[#D9D9D9] hover:bg-transparent">
                    <img src={prevIcon} alt="previous" />
                    Previous
                </button>
            </div>
            <div className="join xl:mx-8">
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">1</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">...</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-white font-inter xl:mx-1 btn bg-link rounded-md hover:bg-link">10</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">11</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">12</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">13</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">14</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">15</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent">16</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent hidden lg:block">17</button>
                <button className="no-animation font-normal text-xs xl:text-sm text-secondary font-inter xl:mx-1 btn bg-transparent border-none hover:bg-transparent hidden lg:block">18</button>
            </div>
            <div>
                <button className="btn no-animation bg-transparent text-secondary font-medium text-xs xl:text-sm border border-[#D9D9D9] hover:border-[#D9D9D9] hover:bg-transparent">
                    Next
                    <img src={nextIcon} alt="next" />
                </button>
            </div>
        </div>
    )
}

export default Pagination;