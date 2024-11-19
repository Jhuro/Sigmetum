import React from 'react';

const SpeciesAttribute = ({title, description}) => {
  
    const items = typeof description === 'string' ? description.split(',') : [];

    return (
        <div className="flex flex-col">
        <span className="text-[#4B644A] text-base font-bold leading-normal">{title}</span>
        <div className="mt-2 max-h-32 overflow-y-auto bg-[#F9FBFA] p-2 rounded">
            {items.length > 0 ? (
            items.map((item, index) => (
                <p key={index} className="text-[#0C1811] text-base italic leading-normal">
                {item.trim()}
                </p>
            ))
            ) : (
            <p className="text-[#0C1811] text-base italic leading-normal">{description}</p>
            )}
        </div>
        </div>
    );
};

export default SpeciesAttribute;