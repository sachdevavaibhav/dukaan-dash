import searchIcon from '../../assets/icons/search.svg';

function SearchInput({placeholder, classes  ,...props}) {
    classes = "input w-full ps-12 bg-[#F2F2F2] placeholder:text-[#808080] text-primary focus:border-none focus:outline-none" + " " + classes;
    return (
        <div className="w-full flex justify-center text-inter relative">
            <div className="absolute left-5 top-1/3 w-5">
                <img src={searchIcon} alt="Search Icon" className='w-full' />
            </div>
            <input type="text" placeholder={placeholder} className={classes} {...props} />
        </div>
    )
}

export default SearchInput;