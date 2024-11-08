import React from 'react';

const FilterSearchBar = ({placeholderText, searchText, onChange}) => {

    return (
        <label className="form-input bg-[#F9FBFA] my-2 w-full flex resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#15B659] focus:border-[#15B659] h-14 placeholder:text-[#0C1811] placeholder:text-[#637588] text-base font-normal leading-normal">
            <div className="flex bg-[#F9FBFA] w-full items-stretch rounded-xl h-full">
                <div
                className="text-[#0C1811] bg-[#F9FBFA] flex items-center justify-center pl-[15px] rounded-l-xl"
                data-icon="MagnifyingGlass"
                data-size="20px"
                data-weight="regular"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                </div>
                <input
                id="buscar"
                value={searchText}
                onChange={onChange}
                placeholder={`${placeholderText}`}
                className="form-input bg-[#F9FBFA] flex w-full min-w-0 resize-none overflow-hidden text-[#0C1811] focus:outline-none focus:ring-0 h-full placeholder:text-[#99BBA8] px-[15px] text-sm font-normal sm:text-base"
                />
            </div>
        </label>
    );
}

export default FilterSearchBar;