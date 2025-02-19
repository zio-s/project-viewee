import { useState, useEffect, useRef } from 'react';
import { DrawerContent, DrawerOverlay, FilterButton } from './style';

const CategoryFilter = ({ category, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    sortBy: 'popularity.desc',
    year: null,
    country: null,
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filterOptions = {
    movie: {
      // 영화 카테고리
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'primary_release_date.desc', label: '최신순' },
      ],
      years: Array.from({ length: 10 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: `${year}년` };
      }),
      countries: [
        { value: 'KR', label: '한국' },
        { value: 'US', label: '미국' },
        { value: 'JP', label: '일본' },
        { value: 'GB', label: '영국' },
      ],
    },
    drama: {
      // 드라마 카테고리
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
      ],
      countries: [
        { value: 'KR', label: '한국' },
        { value: 'US', label: '미국' },
        { value: 'JP', label: '일본' },
      ],
    },
    animation: {
      // 애니메이션 카테고리
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'primary_release_date.desc', label: '최신순' },
      ],
      countries: [
        { value: 'JP', label: '일본' },
        { value: 'US', label: '미국' },
        { value: 'KR', label: '한국' },
      ],
    },
    kids: {
      // 키즈 카테고리
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
      ],
    },
    comedy: {
      // 예능 카테고리
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
      ],
      countries: [
        { value: 'KR', label: '한국' },
        { value: 'US', label: '미국' },
      ],
    },
  };

  const currentOptions = filterOptions[category] || {};

  const handleFilterChange = (type, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: value === prev[type] ? null : value,
    }));
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).filter((value) => value !== null).length;
  };

  const applyFilters = () => {
    onFilterChange(activeFilters);
    setIsOpen(false);
  };

  const resetFilters = () => {
    setActiveFilters({
      sortBy: 'popularity.desc',
      year: null,
      country: null,
    });
  };

  return (
    <>
      <FilterButton onClick={() => setIsOpen(true)}>
        필터
        {getActiveFilterCount() > 0 && <span className="filter-count">{getActiveFilterCount()}</span>}
      </FilterButton>

      <DrawerOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <DrawerContent isOpen={isOpen}>
        <div className="drawer-header">
          <h2>필터</h2>
          <button onClick={() => setIsOpen(false)}>
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3359 37.9375L37.3334 13.9401"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.3281 37.9375L13.3307 13.9401"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {/* 정렬 옵션 */}
          {currentOptions.sorting && (
            <div className="filter-section">
              <h3>정렬</h3>
              <div className="filter-options">
                {currentOptions.sorting.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${activeFilters.sortBy === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange('sortBy', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 방영 상태 (드라마/예능/키즈) */}
          {currentOptions.status && (
            <div className="filter-section">
              <h3>방영 상태</h3>
              <div className="filter-options">
                {currentOptions.status.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${activeFilters.status === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange('status', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 국가 */}
          {currentOptions.countries && (
            <div className="filter-section">
              <h3>국가</h3>
              <div className="filter-options">
                {currentOptions.countries.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${activeFilters.country === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange('country', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 연도 (영화/애니메이션) */}
          {currentOptions.years && (
            <div className="filter-section">
              <h3>제작 연도</h3>
              <div className="filter-options">
                {currentOptions.years.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${activeFilters.year === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange('year', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="drawer-footer">
          <button className="reset" onClick={resetFilters}>
            초기화
          </button>
          <button className="apply" onClick={applyFilters}>
            적용하기
          </button>
        </div>
      </DrawerContent>
    </>
  );
};

export default CategoryFilter;
