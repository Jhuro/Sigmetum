import React, { useState } from 'react';
import ButtonAlternative from './ButtonAlternative.js';
import FilterSearchBar from './FilterSearchBar.js';
import { SortItemsList } from '../utilities/SortItemsList.js';
import { useTranslation } from 'react-i18next';

const CategoryFilter = ({ category, items, blocked, onChange, selected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();

  const toggleCategory = () => {
    if (!blocked) {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleCheckboxChange = (item) => {
    onChange(category, item);
  };

  const handleClearAll = () => {
    onChange(category, 'clear');
  };

  const filteredItems = SortItemsList(items.filter((item) =>
    String(item).toLowerCase().includes(searchText.toLowerCase())
  ));

  return (
    <div className="w-full max-w-md mx-auto bg-[#F9FBFA] rounded-lg shadow-lg p-2 mt-2 mb-2">
      <p
        className={`text-[#0C1811] text-xl font-medium leading-normal pb-2 cursor-pointer ${blocked ? 'text-gray-500' : ''}`}
        onClick={toggleCategory}
      >
        {t(`attributes.${category}`, category)}
      </p>

      {isExpanded && !blocked && (
        <>
        <FilterSearchBar placeholderText={t(`attributes.${category}`, category)} value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <div className="space-y-3 py-1">
          {filteredItems.length > 0 ? (
              [...new Set(
                filteredItems
                  .flatMap((item) => (Array.isArray(item) ? item : [item]))
              )].map((item) => (
                <label key={item} className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="checkbox"
                    name={`${category}-${item}`}
                    checked={selected.has(item)}
                    onChange={() => handleCheckboxChange(item)}
                    className="appearance-none h-6 w-6 border-2 border-[#15B659] rounded-md cursor-pointer hover:bg-[#15B659] checked:bg-[#15B659] checked:border-transparent"
                  />
                  <span className="text-[#0C1811] text-1xl capitalize">{item}</span>
                </label>
              ))
            ) : (
              <p className="text-[#4B644A]">{t('filter.categoryFilter.noResultsFoundPlaceholder')} "{searchText}"</p>
            )}
          </div>
          <div className="mt-1 items-center justify-center flex space-x-4">
            <ButtonAlternative onClick={handleClearAll} text={t('filter.categoryFilter.cleanFilterButton')}/>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryFilter;