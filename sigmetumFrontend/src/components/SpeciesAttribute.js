import React from 'react';

const SpeciesAttribute = ({title, description}) => {
  
    return (
        <div className="flex flex-col gap-1 border-t border-solid border-t-[#14281D]">
            <span className="text-[#4B644A] text-base font-bold leading-normal">{title}</span>
            <span className="text-[#0C1811] text-base italic leading-normal">{description}</span>
        </div>
    );
};

export default SpeciesAttribute;