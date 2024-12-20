import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import SpeciesAttribute from '../components/SpeciesAttribute.js';
import { SortItemsList } from '../utilities/SortItemsList.js';
import { useTranslation } from 'react-i18next';

const Dialog = ({ isOpen, onClose, data, species}) => {
  const { t } = useTranslation();
  if (!isOpen) return null;
  const formattedQuery = encodeURIComponent(species["Especies Características"]);

  const fileterdEspecies = data.filter((item) =>
    item["Especies Características"].includes(species["Especies Características"])
  );

  const uniqueAttributes = {
    province: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Provincia"]))])
      .join(", "),
    municipality: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Municipio"]))])
      .join(", "),
    averageAltitude: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Altitud Media"]))])
      .join(", "),
    biogeographicSector: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Sector Biogeográfico"]))])
      .join(", "),
    bioclimaticFloor: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Piso Bioclimático"]))])
      .join(", "),
    ombrotype: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Ombrotipo"]))])
      .join(", "),
    natureOfSubstrate: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Naturaleza del Sustrato"]))])
      .join(", "),
    seriesType: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Tipo de Serie"]))])
      .join(", "),
    vegetationSeries: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Serie de Vegetación"]))])
      .join(", "),
    potentialVegetation: SortItemsList([...new Set(fileterdEspecies.map((item) => item["Vegetación Potencial"]))])
      .join(", "),
  };

  return (
  <div className="fixed inset-0 z-50 flex overflow-auto items-center justify-center bg-[#0C1811] bg-opacity-70">
    <div className="bg-[#F9FBFA] max-h-screen overflow-auto rounded-lg p-6 w-full max-w-md flex flex-col">
      <div className="flex justify-center px-4 py-2 mx-auto w-full">
        <h2 className="text-[#4B644A] text-4xl mb-4 italic font-bold text-center break-words whitespace-normal">
          {species["Especies Características"]}
        </h2>
      </div>
      
      {species.image ?
        (
        <div
          className="bg-center bg-no-repeat bg-cover h-80 w-full mb-4"
          style={{
            backgroundImage: 'url("' + species.image + '")'
          }}
        ></div>
        ) : (
          <div className="bg-center bg-no-repeat bg-cover h-80 w-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
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

      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto flex-grow">
        {Object.entries(uniqueAttributes).map(([key, value]) => (
          <SpeciesAttribute
            key={key}
            title={t(`explore.dialogSpecies.attributes.${key}`, key)}
            description={value}
          />
        ))}
      </div>

      <div className="flex justify-center px-4 py-2 mx-auto">
        <a
          href={`https://www.ipni.org/?q=${formattedQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0C1811] font-bold hover:underline"
        >
          {t('explore.dialogSpecies.readMoreLabel')}
        </a>
      </div>

      <div className="flex justify-center px-4 py-2 mx-auto mt-4">
        <ButtonPrincipal onClick={onClose} text={t('explore.dialogSpecies.closeButton')} />
      </div>
    </div>
  </div>
  );
};

export default Dialog;