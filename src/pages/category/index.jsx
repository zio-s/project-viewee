import { useDispatch, useSelector } from 'react-redux';
import { CateGoryWrap } from './style';
import { useParams } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { getContent } from '../../store/modules/getThunk';
import CategoryList from './components/CategoryList';
import CategoryFilter from './components/CategoryFilter';
import { movieActions } from '../../store/modules/movieSlice';
import { dramaActions } from '../../store/modules/dramaSlice';
import { aniActions } from '../../store/modules/aniSlice';
import { comedyActions } from '../../store/modules/comedySlice';
import { kidsActions } from '../../store/modules/kidsSlice';

const CateGoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

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
    if (currentCategory) {
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
  }, [category]);

  const loadMoreContent = useCallback(() => {
    if (
      currentCategory &&
      !currentCategory.state.loading &&
      currentCategory.state.currentPage < currentCategory.state.totalPages
    ) {
      dispatch(
        getContent({
          type: currentCategory.type,
          genre: currentCategory.genre,
          page: currentCategory.state.currentPage + 1,
          category,
        })
      );
    }
  }, [currentCategory?.state.loading, currentCategory?.state.currentPage, currentCategory?.state.totalPages, category]);

  if (!currentCategory) return <div>Invalid category</div>;
  if (currentCategory.state.error) return <div>Error: {currentCategory.state.error}</div>;

  return (
    <CateGoryWrap>
      <div>
        <h1>{category}</h1>
        <CategoryFilter />
      </div>
      <CategoryList
        data={currentCategory.state.data}
        category={category}
        onLoadMore={loadMoreContent}
        hasMore={currentCategory.state.currentPage < currentCategory.state.totalPages}
        isLoading={currentCategory.state.loading}
      />
    </CateGoryWrap>
  );
};

export default CateGoryPage;
