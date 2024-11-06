import React, { useState, useEffect, useMemo } from 'react';
import CategoryFilter from './CategoryFilter';
import ButtonAlternative from '../components/ButtonAlternative.js';

const Filter = ({ data, onFilterChange}) => {
  const [categories, setCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const blockedCategories = useMemo(() => ['image', 'scientificName'], []);

  useEffect(() => {
    const newCategories = {};
    data.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (!newCategories[key] && !blockedCategories.includes(key)) {
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
  }, [blockedCategories, data]);

  
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
  }, [selectedFilters, data, onFilterChange]);

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

export default Filter;