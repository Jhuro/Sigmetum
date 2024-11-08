import { useState, useEffect } from 'react';

const ButtonPrincipal = ({ onClick, text, dropdownOptions, icon, className}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconButton, setIsIconButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState(text);

  useEffect(() => {
    if (icon) {
      setIsIconButton(true);
    } else {
      setIsIconButton(false);
    }
  }, [icon]);

  const toggleDropdown = () => {
    if (dropdownOptions) {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (onClick) {
      onClick();
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    
      <div className="relative inline-block">
        {isIconButton ?
          <button
            onClick={toggleDropdown}
            className={`align-middle flex min-w-[70px] max-w-[84px] min-h-[70px] max-h-[84px] text-[#15B659] hover:text-[#F9FBFA] hover:bg-[#15B659] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 sm:h-12 sm:px-5 font-bold leading-normal tracking-[0.015em] sm:font-bold sm:leading-normal sm:tracking-[0.015em] ${className}`}
          >
            <span className="material-symbols-outlined text-3xl mx-auto">
              {icon}
            </span>
          </button>
        :
          <button
            onClick={toggleDropdown}
            className={`bg-[#15B659] align-middle flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 font-bold leading-normal tracking-[0.015em] sm:font-bold sm:leading-normal sm:tracking-[0.015em] ${className}`}
          >
            <span className="text-[#F9FBFA] sm:text-sm md:text-base lg:text-xl truncate">
              {selectedOption}
            </span>
          </button>
        }

        {dropdownOptions && isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default ButtonPrincipal;