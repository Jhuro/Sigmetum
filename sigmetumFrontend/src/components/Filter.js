import React, { useState, useEffect, useMemo, useCallback } from 'react';
import CategoryFilter from './CategoryFilter';
import ButtonAlternative from '../components/ButtonAlternative.js';

/*
const Filter = ({ data, onFilterChange}) => {
  
  const [categories, setCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const blockedCategories = useMemo(() => ['image'], []);

  const updateCategories = useCallback((filteredData) => {
    const newCategories = {};
    filteredData.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        console.log(key);
          if (!newCategories[key] &&  !blockedCategories.includes(key)) {
            newCategories[key] = new Set();
          }
          if (!blockedCategories.includes(key)) {
            newCategories[key].add(value);
          }
      });
    });

    const formattedCategories = {};
    for (const [key, values] of Object.entries(newCategories)) {
      formattedCategories[key] = Array.from(values);
    }
    setCategories(formattedCategories);
  }, [blockedCategories]);

  
  const handleFilterChange = (category, item) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (item === 'clear') {
        updatedFilters[category] = new Set();
      } else {
        const categoryItems = new Set(prev[category] || []);
        if (categoryItems.has(item)) {
          categoryItems.delete(item);
        } else {
          categoryItems.add(item);
        }
        updatedFilters[category] = categoryItems;
      }
      return updatedFilters;
    });
  };
  

  useEffect(() => {
    const filteredData = filterData(data, selectedFilters);
    onFilterChange(filteredData);
    updateCategories(filteredData);
  }, [selectedFilters, updateCategories, data, onFilterChange]);

  const filterData = (data, filters) => {
    return data.filter((item) => {
      return Object.entries(filters).every(([category, selectedItems]) => {
        if (selectedItems.size === 0) return true;
        return selectedItems.has(item[category]);
      });
    });
  };

  const handleClearAllFilters = () => {
    setSelectedFilters({});
    onFilterChange(data);
  };

  return (
    <>
      <h2 className="text-[#0C1811] sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Filtros</h2>
      <div className="flex justify-center px-4 py-2 mx-auto">
        <ButtonAlternative onClick={handleClearAllFilters} text='Eliminar todos los filtros'/>
      </div>
      {Object.entries(categories).map(([category, items]) => (
        <CategoryFilter
          key={category}
          category={category}
          items={items}
          blocked={blockedCategories.includes(category)}
          onChange={handleFilterChange}
          selected={selectedFilters[category] || new Set()}
        />
      ))}
    </>
  );
};
*/

const Filter = ({ data, onFilterChange }) => {
  const [categories, setCategories] = useState({});
  const [filteredCategories, setFilteredCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const blockedCategories = useMemo(() => ['image'], []);

  const initializeCategories = useCallback(() => {
    const allCategories = {};
    data.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (!allCategories[key] && !blockedCategories.includes(key)) {
          allCategories[key] = new Set();
        }
        if (!blockedCategories.includes(key)) {
          allCategories[key].add(value);
        }
      });
    });

    const formattedCategories = {};
    for (const [key, values] of Object.entries(allCategories)) {
      formattedCategories[key] = Array.from(values);
    }
    setCategories(formattedCategories);
    setFilteredCategories(formattedCategories);
  }, [data, blockedCategories]);

  const handleFilterChange = (category, item) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      const categoryItems = new Set(prev[category] || []);
      if (categoryItems.has(item)) {
        categoryItems.delete(item);
      } else {
        categoryItems.add(item);
      }
      updatedFilters[category] = categoryItems;
      return updatedFilters;
    });
  };

  useEffect(() => {
    initializeCategories();
  }, [initializeCategories]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      Object.entries(selectedFilters).every(([category, selectedItems]) =>
        selectedItems.size === 0 ? true : selectedItems.has(item[category])
      )
    );
    onFilterChange(filteredData);

    const newFilteredCategories = { ...categories };
    Object.keys(categories).forEach((cat) => {
      if (selectedFilters[cat]?.size) {
        newFilteredCategories[cat] = categories[cat];
      } else {
        const options = new Set();
        filteredData.forEach((item) => {
          if (!blockedCategories.includes(cat)) {
            options.add(item[cat]);
          }
        });
        newFilteredCategories[cat] = Array.from(options);
      }
    });
    setFilteredCategories(newFilteredCategories);
  }, [data, selectedFilters, categories, blockedCategories, onFilterChange]);

  const handleClearAllFilters = () => {
    setSelectedFilters({});
    onFilterChange(data);
  };

  return (
    <>
      <h2 className="text-[#0C1811] sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Filtros</h2>
      <div className="flex justify-center px-4 py-2 mx-auto">
        <ButtonAlternative onClick={handleClearAllFilters} text='Eliminar todos los filtros'/>
      </div>
      {Object.entries(filteredCategories).map(([category, items]) => (
        <CategoryFilter
          key={category}
          category={category}
          items={items}
          blocked={blockedCategories.includes(category)}
          onChange={handleFilterChange}
          selected={selectedFilters[category] || new Set()}
        />
      ))}
    </>
  );
};

export default Filter;