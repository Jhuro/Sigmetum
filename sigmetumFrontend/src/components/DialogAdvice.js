import React from "react";
import ButtonPrincipal from "./ButtonPrincipal";
import { useTranslation } from 'react-i18next';

const DialogAdvice = ({onClose, dialogTitle, dialogMessage}) => {
    const { t } = useTranslation();

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C1811] bg-opacity-70">
            <div className="bg-[#F9FBFA] rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-center px-4 py-2 mx-auto">
                    <h3 className="text-[#15B659] text-4xl mb-4 font-bold">{dialogTitle}</h3>
                </div>
                <div className="flex justify-center px-4 py-2 mx-auto">
                    <p className="py-2 text-xl">{dialogMessage}</p>
                </div>
                <div className="flex justify-center px-4 py-2 mx-auto">
                    <ButtonPrincipal text={t('dialogAdvice.closeButton')} onClick={onClose}/>
                </div>
            </div>
        </div>
    );

}

export default DialogAdvice;