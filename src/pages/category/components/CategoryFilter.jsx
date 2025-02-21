import { useState, useEffect } from 'react';
import { DrawerContent, DrawerOverlay, FilterButton } from './style';

const CategoryFilter = ({ category, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getInitialFilters = (category) => {
    const baseFilters = {
      sortBy: 'popularity.desc',
      genres: [],
      networks: [],
    };

    switch (category) {
      case 'movie':
        return {
          ...baseFilters,
          year: null,
          country: null,
          runtime: null,
          ratings: null,
        };
      case 'drama':
        return {
          ...baseFilters,
          status: null,
          country: null,
          seasons: null,
        };
      case 'animation':
        return {
          ...baseFilters,
          country: null,
          ratings: null,
          year: null,
        };
      case 'comedy':
        return {
          ...baseFilters,
          status: null,
          country: null,
        };
      case 'kids':
        return {
          ...baseFilters,
          status: null,
          ageRating: null,
        };
      default:
        return baseFilters;
    }
  };
  const [activeFilters, setActiveFilters] = useState(getInitialFilters(category));
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
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'primary_release_date.desc', label: '최신순' },
        { value: 'revenue.desc', label: '수익순' },
      ],
      genres: [
        { value: 28, label: '액션' },
        { value: 12, label: '모험' },
        { value: 35, label: '코미디' },
        { value: 18, label: '드라마' },
        { value: 27, label: '공포' },
        { value: 9648, label: '미스터리' },
        { value: 10749, label: '로맨스' },
        { value: 878, label: 'SF' },
        { value: 53, label: '스릴러' },
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
      runtime: [
        { value: { min: 0, max: 90 }, label: '90분 이하' },
        { value: { min: 90, max: 120 }, label: '90-120분' },
        { value: { min: 120, max: 150 }, label: '120-150분' },
        { value: { min: 150, max: 999 }, label: '150분 이상' },
      ],
      ratings: [
        { value: 7, label: '7점 이상' },
        { value: 8, label: '8점 이상' },
        { value: 9, label: '9점 이상' },
      ],
    },
    drama: {
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      genres: [
        { value: 18, label: '드라마' },
        { value: 10751, label: '가족' },
        { value: 9648, label: '미스터리' },
        { value: 10749, label: '로맨스' },
        { value: 80, label: '범죄' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
        { value: 'Planned', label: '방영예정' },
      ],
      countries: [
        { value: 'KR', label: '한국' },
        { value: 'US', label: '미국' },
        { value: 'JP', label: '일본' },
      ],
      networks: [
        { value: 213, label: 'Netflix' },
        { value: 1398, label: 'Disney+' },
        { value: 97, label: 'TVN' },
        { value: 348, label: 'JTBC' },
      ],
      seasons: [
        { value: { min: 1, max: 1 }, label: '1시즌' },
        { value: { min: 2, max: 3 }, label: '2-3시즌' },
        { value: { min: 4, max: 999 }, label: '4시즌 이상' },
      ],
    },
    animation: {
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'vote_average.desc', label: '평점순' },
        { value: 'primary_release_date.desc', label: '최신순' },
      ],
      genres: [
        { value: 16, label: '애니메이션' },
        { value: 12, label: '모험' },
        { value: 35, label: '코미디' },
        { value: 10751, label: '가족' },
        { value: 14, label: '판타지' },
      ],
      countries: [
        { value: 'JP', label: '일본' },
        { value: 'US', label: '미국' },
        { value: 'KR', label: '한국' },
      ],
      ratings: [
        { value: 7, label: '7점 이상' },
        { value: 8, label: '8점 이상' },
      ],
      years: Array.from({ length: 10 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: `${year}년` };
      }),
    },
    kids: {
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      genres: [
        { value: 10762, label: '키즈' },
        { value: 16, label: '애니메이션' },
        { value: 35, label: '코미디' },
        { value: 10751, label: '가족' },
        { value: 12, label: '모험' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
      ],
      ageRating: [
        { value: 'TV-Y', label: '전체관람가' },
        { value: 'TV-Y7', label: '7세 이상' },
        { value: 'TV-G', label: '가족시청가' },
      ],
    },
    comedy: {
      sorting: [
        { value: 'popularity.desc', label: '인기순' },
        { value: 'first_air_date.desc', label: '최신순' },
      ],
      genres: [
        { value: 35, label: '코미디' },
        { value: 10767, label: '토크쇼' },
        { value: 10764, label: '리얼리티' },
        { value: 99, label: '다큐멘터리' },
      ],
      status: [
        { value: 'Returning', label: '방영중' },
        { value: 'Ended', label: '방영완료' },
      ],
      countries: [
        { value: 'KR', label: '한국' },
        { value: 'US', label: '미국' },
      ],
      networks: [
        { value: 97, label: 'TVN' },
        { value: 348, label: 'JTBC' },
        { value: 455, label: 'MBC' },
        { value: 456, label: 'SBS' },
      ],
    },
  };

  const currentOptions = filterOptions[category] || {};

  const handleFilterChange = (type, value) => {
    setActiveFilters((prev) => {
      if (type === 'genres' || type === 'networks') {
        const currentArray = prev[type] || [];
        const newArray = currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value];

        return {
          ...prev,
          [type]: newArray,
        };
      }

      return {
        ...prev,
        [type]: value === prev[type] ? null : value,
      };
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;

    if (activeFilters.genres?.length > 0) count += activeFilters.genres.length;
    if (activeFilters.networks?.length > 0) count += activeFilters.networks.length;

    if (activeFilters.sortBy && activeFilters.sortBy !== 'popularity.desc') count += 1;
    if (activeFilters.year) count += 1;
    if (activeFilters.country) count += 1;
    if (activeFilters.status) count += 1;
    if (activeFilters.runtime) count += 1;
    if (activeFilters.ratings) count += 1;
    if (activeFilters.seasons) count += 1;
    if (activeFilters.ageRating) count += 1;

    return count;
  };

  const applyFilters = () => {
    onFilterChange(activeFilters);
    setIsOpen(false);
  };

  const resetFilters = () => {
    setActiveFilters(getInitialFilters(category));
    setIsOpen(false);
  };

  return (
    <>
      <FilterButton onClick={() => setIsOpen(true)} data-active={getActiveFilterCount() > 0}>
        필터
        {getActiveFilterCount() > 0 && <span className="filter-count">{getActiveFilterCount()}</span>}
      </FilterButton>

      <DrawerOverlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <DrawerContent $isOpen={isOpen}>
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
          {/* 정렬 옵션 (공통) */}
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

          {/* 장르 필터 (모든 카테고리) */}
          {currentOptions.genres && (
            <div className="filter-section">
              <h3>장르</h3>
              <div className="filter-options">
                {currentOptions.genres.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${(activeFilters.genres || []).includes(option.value) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('genres', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 국가 필터 (영화, 드라마, 애니메이션, 예능) */}
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

          {/* 방영 상태 (드라마, 예능, 키즈) */}
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

          {/* 방송사 필터 (드라마, 예능) */}
          {currentOptions.networks && (
            <div className="filter-section">
              <h3>방송사/플랫폼</h3>
              <div className="filter-options">
                {currentOptions.networks.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${(activeFilters.networks || []).includes(option.value) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('networks', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 연도 필터 (영화, 애니메이션) */}
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

          {/* 러닝타임 필터 (영화) */}
          {category === 'movie' && currentOptions.runtime && (
            <div className="filter-section">
              <h3>러닝타임</h3>
              <div className="filter-options">
                {currentOptions.runtime.map((option) => (
                  <button
                    key={option.value.min}
                    className={`filter-chip ${activeFilters.runtime?.min === option.value.min ? 'active' : ''}`}
                    onClick={() => handleFilterChange('runtime', option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 연령 등급 필터 (키즈) */}
          {category === 'kids' && currentOptions.ageRating && (
            <div className="filter-section">
              <h3>연령 등급</h3>
              <div className="filter-options">
                {currentOptions.ageRating.map((option) => (
                  <button
                    key={option.value}
                    className={`filter-chip ${activeFilters.ageRating === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange('ageRating', option.value)}
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
