import React, { useState, useEffect, useCallback  } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Explore from './pages/Explore.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import DataManagement from './pages/DataManagement.js';
import FilesUpload from './pages/FilesUpload.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';
import Filter from './components/Filter.js';
import LoadSpinner from './components/LoadSpinner';
import ProtectedRoute from './components/ProtectedRoute.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mergedData, setMergedData] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const location = useLocation();
  const showSideMenu = ["/cargar-archivos", "/administrar-datos", "/explorar"].includes(location.pathname);
  const requireData = ["/explorar"].includes(location.pathname);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8000/get-merged-data');
      const result = await response.json();
      setMergedData(result);
      setFilteredSpecies(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/explorar') {
      fetchData();
    }
  }, [location.pathname, fetchData]);

  const handleFileDropdownSelect = (data) => {
    setSelectedData(data);
    setFilteredData(data);
    setIsLoading(false);
  };

  const handleFilterDataChange = (filtered) => {
    setFilteredData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(filtered)) {
        return filtered;
      }
      return prev;
    });
  };

  const handleOnSpeciesSelect = (speciesSelected) => {
    setSelectedSpecies(speciesSelected);
  }

  const handleFilterChange = (filteredData) => {
    setFilteredSpecies((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(filteredData)) {
        return filteredData;
      }
      return prev;
    });
  };

  useEffect(() => {
    if (requireData) {
      setIsLoading(true);
    }
  }, [location.pathname, requireData]);

  const menuOptions = [
    { id: 'filtro', name: 'Filtro',  component: <Filter data={mergedData} onSpeciesSelect={handleOnSpeciesSelect} onFilterChange={handleFilterChange}/>, icon:"filter_alt"},
    { id: 'dataManagementFilter', name: 'Filtro',  component: <Filter data={selectedData} onSpeciesSelect={handleOnSpeciesSelect} onFilterChange={handleFilterDataChange}/>, icon:"filter_alt"},
    { id: 'administrarDatos', name: 'Administrar datos', icon:"database", link:"/administrar-datos"},
    { id: 'cargarArchivos', name: 'Cargar archivos', icon:"upload", link:"/cargar-archivos"},
  ];

  return (
    <div className="App">
      <header className="bg-[#F9FBFA] border-b-2 border-[#99BBA8] flex items-center justify-between whitespace-nowrap px-5 py-2">
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src='https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png' alt='logo' className="h-14"/>
            <p className="font-bold text-[#0C1811] text-xl ml-4">SIGMETUM</p>
          </div>
        </Link>
          <div className="flex flex-1 justify-end gap-8">
            <Navbar/>
          </div>
      </header>

      <div className="flex min-h-screen">

        {showSideMenu && <Sidebar managementData={selectedData} exploreData={mergedData} menuOptions={menuOptions}/>}

        <main className='flex-grow bg-[#F9FBFA]'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            
            <Route path="/explorar" 
            element={isLoading && requireData ?
              (
              <div className="flex bg-[#F9FBFA] justify-center items-center min-h-screen">
                <LoadSpinner />
              </div>
              ) : (
                <Explore data={mergedData} filteredSpecies={filteredSpecies} selectedSpecies={selectedSpecies}/>
              )
            }/>
            <Route path="/sobre-nosotros" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cargar-archivos" element={<ProtectedRoute element={<FilesUpload/>}/>}/>
            <Route path="/administrar-datos" element={<ProtectedRoute element={<DataManagement onFileDropdownSelect={handleFileDropdownSelect} filteredSpecies={filteredData}/>}/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
      <footer className='bg-[#0C1811] flex justify-center relative'>
        <Footer/>
        <span className='text-[#F9FBFA] absolute bottom-2 right-2'>V 1.0.0</span>
      </footer>
    </div>
  );
}

export default App;