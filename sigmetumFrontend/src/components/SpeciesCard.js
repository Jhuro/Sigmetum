import React, { useState } from 'react';
import DialogSpecies from './DialogSpecies';

const SpeciesCard = ({data, species}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <div
        onClick={openDialog}
        className="cursor-pointer bg-[#F9FBFA] flex items-center gap-2 rounded-lg min-h-[72px] px-2 py-2 border border-[#99BBA8] hover:bg-[#99BBA8]"
      >

        {species.image ?
          (
          <div
            className="bg-center bg-no-repeat bg-cover aspect-square rounded-lg min-w-14 min-h-14"
            style={{
              backgroundImage: 'url("' + species.image + '")'
            }}
          ></div>
          ) : (
            <div className="relative bg-center bg-no-repeat bg-cover aspect-square rounded-lg min-w-14 min-h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="64"
                height="64"
                className="h-full w-full"
                fill="none"
              >
                <rect width="64" height="64" fill="#B5E4A5" rx="10" />
                <path
                  d="M32 44c6.627 0 12-5.373 12-12S38.627 20 32 20s-12 5.373-12 12 5.373 12 12 12z"
                  fill="#4CAF50"
                />
                <path
                  d="M32 44V18M36 22s6 2 6 10c0 6-6 10-6 10M28 22s-6 2-6 10c0 6 6 10 6 10"
                  stroke="#2E7D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )
        }
        <div className="flex flex-col justify-center">
          <p className="text-[#0C1811] text-base italic font-medium leading-normal whitespace-normal overflow-hidden text-ellipsis">
            {species["Especies Características"]}
          </p>
        </div>
      </div>

      <DialogSpecies isOpen={isDialogOpen} onClose={closeDialog} data={data} species={species}/>
      </>
  );
};

export default SpeciesCard;