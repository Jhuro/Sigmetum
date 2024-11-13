import React from "react";
import ButtonPrincipal from "./ButtonPrincipal";

const DialogAdvice = ({onClose, dialogTitle, dialogMessage}) => {

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
                <ButtonPrincipal text="Cerrar" onClick={onClose}/>
                </div>
            </div>
        </div>
    );

}

export default DialogAdvice;