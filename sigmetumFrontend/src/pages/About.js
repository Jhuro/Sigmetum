import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-[#F9FBFA] relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
                  style={{
                    backgroundImage: 'url("https://img.freepik.com/premium-vector/forest-landscape-with-full-moon-background_670382-358934.jpg")'
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#14281D] tracking-light text-[32px] font-bold leading-tight min-w-72">
                {t('aboutUs.title')}
              </p>
            </div>
            <p className="text-[#14281D] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('aboutUs.ourWorkTeam')}
            </p>
            <h3 className="text-[#14281D] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {t('aboutUs.projectPurposeSubtitle')}
            </h3>
            <p className="text-[#0C1811] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('aboutUs.projectPurposeContent')}
            </p>
            <h3 className="text-[#14281D] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {t('aboutUs.ourMissionSubtitle')}
            </h3>
            <p className="text-[#0C1811] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('aboutUs.ourMissionContent')}
            </p>
            <h3 className="text-[#14281D] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {t('aboutUs.ourValuesSubtitle')}
            </h3>
            <p className="text-[#0C1811] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('aboutUs.ourValuesContent')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;