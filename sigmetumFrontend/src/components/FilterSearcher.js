import React from 'react';

const FilterSearcher = () => {

    return (
        <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] sm:h-16">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div
            className="text-[#648778] flex border border-[#dce5e1] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
            data-icon="MagnifyingGlass"
            data-size="20px"
            data-weight="regular"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path
                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            ></path>
            </svg>
        </div>
        <input
        id="buscar"
            placeholder="Buscar...?"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111715] focus:outline-0 focus:ring-0 border border-[#dce5e1] bg-white focus:border-[#dce5e1] h-full placeholder:text-[#648778] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal"
        />
        <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce5e1] bg-white pr-[7px]">
            <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1dd384] text-[#111715] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]"
            >
            <span className="truncate">Buscar</span>
            </button>
        </div>
        </div>
        </label>
    );
}

export default FilterSearcher;