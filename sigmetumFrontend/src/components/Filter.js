import React, { useState, useEffect, useMemo } from 'react';
import CategoryFilter from './CategoryFilter';
import ButtonAlternative from '../components/ButtonAlternative.js';
import { useTranslation } from 'react-i18next';

const Filter = ({ data, onFilterChange, onSpeciesSelect }) => {
  const [categories, setCategories] = useState({});
  const [filteredCategories, setFilteredCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const blockedCategories = useMemo(() => ['image'], []);
  const { t } = useTranslation();

  useEffect(() => {
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

      if (item === 'clear') {
        delete updatedFilters[category];
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

    console.log(selectedFilters);
  };

  useEffect(() => {
    let filteredData = [...data];

    Object.entries(selectedFilters).forEach(([category, selectedItems]) => {
      if (selectedItems.size > 0) {
        filteredData = filteredData.filter((item) => {
          const itemValue = item[category];
  
          if (Array.isArray(itemValue)) {
            return itemValue.some((value) => selectedItems.has(value));
          }
  
          return selectedItems.has(itemValue);
        });
      }
    });
  
    onSpeciesSelect(selectedFilters["Especies Características"]);
    onFilterChange(filteredData);

    const newFilteredCategories = {};
    Object.keys(categories).forEach((cat) => {
      const options = new Set();
  
      let categoryFilteredData = [...data];
      Object.entries(selectedFilters).forEach(([selectedCategory, selectedItems]) => {
        if (selectedCategory !== cat && selectedItems.size > 0) {
          categoryFilteredData = categoryFilteredData.filter((item) => {
            const itemValue = item[selectedCategory];
            if (Array.isArray(itemValue)) {
              return itemValue.some((value) => selectedItems.has(value));
            }
            return selectedItems.has(itemValue);
          });
        }
      });
  
      categoryFilteredData.forEach((item) => {
        const itemValue = item[cat];
        if (!blockedCategories.includes(cat)) {
          if (Array.isArray(itemValue)) {
            itemValue.forEach((value) => options.add(value));
          } else {
            options.add(itemValue);
          }
        }
      });
  
      newFilteredCategories[cat] = Array.from(options);
    });
  
    setFilteredCategories(newFilteredCategories);
  }, [data, selectedFilters, categories, blockedCategories, onFilterChange, onSpeciesSelect]);

  const handleClearAllFilters = () => {
    setSelectedFilters({});
    onFilterChange(data);
  };

  return (
    <>
      <h2 className="text-[#0C1811] sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
        {t('filter.title')}
      </h2>
      <div className="flex justify-center px-4 py-2 mx-auto">
        <ButtonAlternative onClick={handleClearAllFilters} text={t('filter.cleanAllFiltersButton')} />
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