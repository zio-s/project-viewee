import React, { useState, useEffect, useRef } from 'react';
import { FilterContainer } from '../style';

const CategoryFilter = ({ currentFilter, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filters = {
    latest: '최신순',
    popular: '인기순',
    rating: '평점순',
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
    setIsOpen(false);
  };

  return (
    <FilterContainer ref={dropdownRef}>
      <button className={`dropdown-button ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {filters[currentFilter] || '필터'}
        <svg width="28" height="28" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_643_37718)">
            <path
              d="M25.6616 37.5109C26.1848 37.5109 26.7078 37.3017 27.0637 36.904L43.2607 20.3094C43.6164 19.9537 43.8257 19.4933 43.8257 18.9702C43.8257 17.882 43.0094 17.0449 41.9214 17.0449C41.3982 17.0449 40.9169 17.2542 40.561 17.589L24.5315 33.9743H26.7707L10.7411 17.589C10.4062 17.2542 9.92494 17.0449 9.38087 17.0449C8.29269 17.0449 7.47656 17.882 7.47656 18.9702C7.47656 19.4933 7.68583 19.9537 8.04157 20.3304L24.2386 36.904C24.6362 37.3017 25.1175 37.5109 25.6616 37.5109Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_643_37718">
              <rect width="36.3491" height="22.2866" fill="white" transform="translate(7.47656 15.2246)" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {Object.entries(filters).map(([key, label]) => (
          <button key={key} className={currentFilter === key ? 'active' : ''} onClick={() => handleFilterClick(key)}>
            {label}
          </button>
        ))}
      </div>
    </FilterContainer>
  );
};

export default CategoryFilter;
