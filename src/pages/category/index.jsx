import { useDispatch, useSelector } from 'react-redux';
import { CateGoryWrap, SectionTitle } from './style';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { getContent, getFilteredContent, searchContent } from '../../store/modules/getThunk';
import CategoryList from './components/CategoryList';
import CategoryFilter from './components/CategoryFilter';
import { movieActions } from '../../store/modules/movieSlice';
import { dramaActions } from '../../store/modules/dramaSlice';
import { aniActions } from '../../store/modules/aniSlice';
import { comedyActions } from '../../store/modules/comedySlice';
import { kidsActions } from '../../store/modules/kidsSlice';
import NotFiles from '../notfile';
import PersonList from './components/person/PersonList';

const CateGoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const searchData = useSelector((state) => state.searchR);
  const [activeFilters, setActiveFilters] = useState({
    sortBy: 'popularity.desc',
    genres: [],
    year: null,
    country: null,
    status: null,
    networks: [],
    runtime: null,
    ratings: null,
    seasons: null,
    ageRating: null,
  });
  const categoryMap = {
    movie: {
      state: useSelector((state) => state.movieR),
      type: 'movie',
      genre: null,
      clearAction: movieActions.clearData,
    },
    drama: {
      state: useSelector((state) => state.dramaR),
      type: 'tv',
      genre: 'drama',
      clearAction: dramaActions.clearData,
    },
    animation: {
      state: useSelector((state) => state.aniR),
      type: 'movie',
      genre: 'animation',
      clearAction: aniActions.clearData,
    },
    comedy: {
      state: useSelector((state) => state.comedyR),
      type: 'tv',
      genre: 'comedy',
      clearAction: comedyActions.clearData,
    },
    kids: {
      state: useSelector((state) => state.kidsR),
      type: 'tv',
      genre: 'kids',
      clearAction: kidsActions.clearData,
    },
  };
  const currentCategory = categoryMap[category];
  useEffect(() => {
    if (searchQuery) {
      dispatch(searchContent({ query: searchQuery }));
    } else if (currentCategory) {
      dispatch(currentCategory.clearAction());
      dispatch(
        getContent({
          type: currentCategory.type,
          genre: currentCategory.genre,
          page: 1,
          category,
        })
      );
    }
  }, [category, searchQuery, dispatch]);

  const handleFilterChange = (filterParams) => {
    if (currentCategory) {
      setActiveFilters(filterParams);
      dispatch(currentCategory.clearAction());

      // getFilteredContent thunk 호출
      dispatch(
        getFilteredContent({
          category,
          filterOptions: filterParams,
          page: 1,
        })
      );
    }
  };
  const loadMoreContent = useCallback(() => {
    if (searchQuery) {
      if (!searchData.loading && searchData.currentPage < searchData.totalPages) {
        dispatch(
          searchContent({
            query: searchQuery,
            page: searchData.currentPage + 1,
          })
        );
      }
    } else if (
      currentCategory &&
      !currentCategory.state.loading &&
      currentCategory.state.currentPage < currentCategory.state.totalPages
    ) {
      // 필터가 적용된 상태에서 더 보기
      dispatch(
        getFilteredContent({
          category,
          filterOptions: activeFilters,
          page: currentCategory.state.currentPage + 1,
        })
      );
    }
  }, [searchQuery, currentCategory, searchData, category, activeFilters]);
  useEffect(() => {
    setActiveFilters({
      sortBy: 'popularity.desc',
      genres: [],
      year: null,
      country: null,
      status: null,
      networks: [],
      runtime: null,
      ratings: null,
      seasons: null,
      ageRating: null,
    });
  }, [category]);
  if (searchQuery) {
    if (searchData.error) return <div>검색 중 오류가 발생했습니다..: {searchData.error}</div>;
  } else {
    if (!currentCategory) {
      return <NotFiles />;
    }
    if (currentCategory.state.error) return <div>Error: {currentCategory.state.error}</div>;
  }

  return (
    <CateGoryWrap>
      <>
        <div className="category-header">
          <h1>{searchQuery ? `검색 결과 : ${searchQuery}` : category}</h1>
          {/* 필터 */}
          {!searchQuery && (
            <CategoryFilter category={category} onFilterChange={handleFilterChange} activeFilters={activeFilters} />
          )}
        </div>

        {/* 인물 검색 결과 */}
        {searchQuery && searchData.searchData && searchData.searchData.some((item) => item.media_type === 'person') && (
          <PersonList searchData={searchData.searchData} category={category} />
        )}

        {/* 관련 컨텐츠 섹션 */}
        {searchQuery &&
          searchData.searchData &&
          searchData.searchData.some((item) => item.media_type === 'person') &&
          searchData.searchData.some((item) => item.media_type !== 'person') && (
            <SectionTitle>관련 컨텐츠</SectionTitle>
          )}

        {/* 카데고리 컨텐츠 목록 */}
        <CategoryList
          data={
            searchQuery
              ? searchData.searchData.filter((item) => item.media_type !== 'person')
              : currentCategory.state.data
          }
          category={category}
          onLoadMore={loadMoreContent}
          hasMore={
            searchQuery
              ? searchData.currentPage < searchData.totalPages
              : currentCategory.state.currentPage < currentCategory.state.totalPages
          }
          isLoading={searchQuery ? searchData.loading : currentCategory.state.loading}
        />
      </>
    </CateGoryWrap>
  );
};

export default CateGoryPage;
