import React from 'react';

const ButtonPrincipal = ({onClick, text}) => {

  return (
        <button
            onClick={onClick}
            className="bg-[#15B659] flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 font-bold leading-normal tracking-[0.015em] sm:font-bold sm:leading-normal sm:tracking-[0.015em]"
        >
            <span className="text-[#F9FBFA] sm:text-sm md:text-base lg:text-xl truncate">{text}</span>
        </button>
  );
};

export default ButtonPrincipal;