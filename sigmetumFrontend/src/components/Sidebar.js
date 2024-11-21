import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonPrincipal from './ButtonPrincipal';

const Sidebar = ({ exploreData, menuOptions }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const location = useLocation();

  const exclusions = {
    '/explorar': ['administrarDatos', 'cargarArchivos', 'dataManagementFilter'],
    '/cargar-archivos': ['filtro', 'dataManagementFilter'],
    '/administrar-datos': ['filtro'],
  };

  const filteredMenuOptions = menuOptions.filter(option => {
    const excludedOptions = exclusions[location.pathname] || [];
    if (excludedOptions.includes(option.id)) return false;
    if (location.pathname === '/explorar' && option.id === 'filtro' && !exploreData) return false;
    return true;
  });

  const handleButtonClick = (optionId) => {
    setActiveComponent((prevActive) => (prevActive === optionId ? null : optionId));
  };

  return (
    <aside className="bg-[#F9FBFA] flex min-h-full p-5">
      <nav className="mb-4 flex flex-col gap-2">
        {filteredMenuOptions.map((option) => (
          option.link ? (
            <Link to={option.link} key={option.id}>
              <ButtonPrincipal
                className={`${location.pathname === option.link ? 'bg-[#15B659] text-[#F9FBFA]' : ''}`}
                icon={option.icon}
              />
            </Link>
          ) : (
            <ButtonPrincipal
              className={`${activeComponent === option.id ? 'bg-[#15B659] text-[#F9FBFA]' : ''}`}
              key={option.id}
              onClick={() => handleButtonClick(option.id)}
              icon={option.icon}
            />
          )
        ))}
      </nav>

      {activeComponent && (
        <div className="content px-4 bg-[#F9FBFA] max-h-screen overflow-y-auto">
          {menuOptions.find((option) => option.id === activeComponent)?.component}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;