import React, { useState } from 'react';
import Dialog from './Dialog';

const SpeciesCard = ({species}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <div
        onClick={openDialog}
        className="cursor-pointer bg-[#F9FBFA] flex items-center gap-2 rounded-lg min-h-[72px] px-2 py-2 border border-[#99BBA8] hover:bg-[#99BBA8]"
      >
        <div
          className="bg-center bg-no-repeat bg-cover aspect-square rounded-lg min-w-14 min-h-14"
          style={{
            backgroundImage: 'url("' + species.image + '")'
          }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0C1811] text-base italic font-medium leading-normal whitespace-normal overflow-hidden text-ellipsis">
            {species.characteristicSpecies}
          </p>
        </div>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} species = {species}/>
      </>
  );
};

export default SpeciesCard;