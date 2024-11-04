import React from 'react';

const FilterSearchBar = ({placeholderText}) => {

    return (
        <label className="flex flex-col min-w-40 h-10 mb-2 w-full">
            <div className="flex w-full items-stretch rounded-xl border h-full">
                <div
                className="text-[#0C1811] flex bg-[#F9FBFA] items-center justify-center pl-[15px] rounded-l-xl border border-[#99BBA8] border-r-0"
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
                placeholder={`${placeholderText}`}
                className="form-input flex w-full min-w-0 resize-none overflow-hidden text-[#0C1811] focus:outline-none focus:ring-0 bg-[#F9FBFA] h-full placeholder:text-[#99BBA8] px-[15px] text-sm font-normal sm:text-base border border-[#99BBA8] border-l-0 rounded-r-xl"
                />
            </div>
        </label>
    );
}

export default FilterSearchBar;