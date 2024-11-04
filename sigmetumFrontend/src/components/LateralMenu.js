import React from 'react'
import { Link } from 'react-router-dom';

const LateralMenu = () => {
    return(

        <aside className="bg-[#F9FBFA] flex justify-center px-4 py-2 mx-auto ">
          <div className="layout-content-container flex flex-col w-80">
            <Link to="/administrar-datos">
                <div className="text-[#0C1811] text-xl font-medium leading-normal pb-2 cursor-pointer w-full max-w-md mx-auto bg-[#F9FBFA] rounded-lg shadow-lg p-2 mt-2 mb-2">
                    <span className="text-[#0C1811] text-1xl capitalize">Administrar datos</span>
                </div>
            </Link>
            <Link to="/cargar-archivos">
                <div className="text-[#0C1811] text-xl font-medium leading-normal pb-2 cursor-pointer w-full max-w-md mx-auto bg-[#F9FBFA] rounded-lg shadow-lg p-2 mt-2 mb-2">
                    <span className="text-[#0C1811] text-1xl capitalize">Cargar archivos</span>
                </div>
            </Link>
          </div>
        </aside>
    );
}

export default LateralMenu