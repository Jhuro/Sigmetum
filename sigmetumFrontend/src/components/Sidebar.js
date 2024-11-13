import { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import ButtonPrincipal from './ButtonPrincipal';

const Sidebar = ({ menuOptions }) => {
    const [activeComponent, setActiveComponent] = useState(null);
    
    const location = useLocation();

    const filteredMenuOptions = menuOptions.filter(option => {
      if (location.pathname === '/explorar' && option.id === 'administrarDatos') {
        return false;
      }
      if (location.pathname === '/explorar' && option.id === 'cargarArchivos') {
        return false;
      }
      if (location.pathname === '/explorar' && option.id === 'dataManagementFilter') {
        return false;
      }
      if (location.pathname === '/cargar-archivos' && option.id === 'filtro') {
        return false;
      }
      if (location.pathname === '/cargar-archivos' && option.id === 'dataManagementFilter') {
        return false;
      }
      if (location.pathname === '/administrar-datos' && option.id === 'filtro') {
        return false;
      }
      
      return true;
    });

    const handleButtonClick = (optionId) => {
        if (activeComponent === optionId) {
          setActiveComponent(null);
        } else {
          setActiveComponent(optionId);
        }

      };
      
    return (
        <aside className="bg-[#F9FBFA] flex min-h-full p-5">
        <nav className="mb-4 flex flex-col gap-2">
        {filteredMenuOptions.map((option) => (
          option.link ? (
            <Link to={option.link} key={option.id}>
              <ButtonPrincipal 
              className={`${location.pathname === option.link ? 'bg-[#15B659] text-[#F9FBFA]' : ''}`}
              key={option.id}
              icon={option.icon}/>
            </Link>
          ) : 
            <ButtonPrincipal 
            className={`${activeComponent ? 'bg-[#15B659] text-[#F9FBFA]' : ''}`}
            key={option.id} 
            onClick={() => handleButtonClick(option.id)} 
            icon={option.icon}/>
          ))}
        </nav>
        
        {activeComponent ? 
            <div className="content px-4 bg-[#F9FBFA] max-h-screen overflow-y-auto">
                {menuOptions.find((option) => option.id === activeComponent)?.component}
            </div>
            :
            <></>
        }
      </aside>
    );
  };

export default Sidebar;