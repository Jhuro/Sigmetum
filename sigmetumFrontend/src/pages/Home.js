import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm.js';

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
        <div className="@container">
          <div
             className="bg-[#F9FBFA] flex min-h-screen w-full flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 items-start justify-end px-4 pb-20 md:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.alphacoders.com/862/862181.jpg")`
            }}
          >
              <div className="flex flex-col gap-5 text-left">
                <h1 className="text-[#F9FBFA] text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                  {t('home.title')}
                </h1>
                <h2 className="text-[#F9FBFA] text-sm font-normal leading-normal sm:text-2xl sm:font-normal sm:leading-normal">
                {t('home.subtitle')}
                </h2>
                <Link to="/explorar">
                  <ButtonPrincipal text={t('home.searchButton')}/>
                </Link>
              </div>
            </div>
        </div>

        <div className="flex w-full">
          <div className="basis-1/2 p-4 grid grid-cols-1 gap-6">
            <div className="border-t grid grid-cols-2 border-t-[#14281D] py-5">
              <p className="text-[#4B644A] text-sm font-normal leading-normal">
                {t('home.descriptionLabel')}
              </p>
              <p className="text-[#0C1811] text-sm font-normal leading-normal">
                {t('home.descriptionContent')}
              </p>
            </div>

            <div className="border-t grid grid-cols-2 border-t-[#14281D] py-5">
              <p className="text-[#4B644A] text-sm font-normal leading-normal">
              {t('home.contactLabel')}
              </p>
              <span className="text-[#0C1811] text-sm font-normal leading-normal whitespace-pre-line">
                {t('home.contactContent')}
              </span>
            </div>

            <div className="border-t grid grid-cols-2 border-t-[#14281D] py-5">
              <p className="text-[#4B644A] text-sm font-normal leading-normal">
                {t('home.locationLabel')}
              </p>
              <span className="text-[#0C1811] text-sm font-normal leading-normal whitespace-pre-line">
                {t('home.locationContent')}
              </span>
            </div>
          </div>

          <div className="basis-1/2">
            <ContactForm />
          </div>
        </div>
    </>
  );
};

export default Home;