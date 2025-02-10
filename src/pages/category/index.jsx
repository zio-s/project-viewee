import { useDispatch, useSelector } from 'react-redux';
import { CateGoryWrap } from './style';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getContent } from '../../store/modules/getThunk';
import CategoryList from './components/CategoryList';
import CategoryFilter from './components/CategoryFilter';

const CateGoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
    currentPage: moviePage,
    totalPages: movieTotalPages,
  } = useSelector((state) => state.movieR);

  const {
    data: dramaData,
    loading: dramaLoading,
    error: dramaError,
    currentPage: dramaPage,
    totalPages: dramaTotalPages,
  } = useSelector((state) => state.dramaR);

  const {
    data: aniData,
    loading: aniLoading,
    error: aniError,
    currentPage: aniPage,
    totalPages: aniTotalPages,
  } = useSelector((state) => state.aniR);

  const {
    data: comedyData,
    loading: comedyLoading,
    error: comedyError,
    currentPage: comedyPage,
    totalPages: comedyTotalPages,
  } = useSelector((state) => state.comedyR);

  const {
    data: kidsData,
    loading: kidsLoading,
    error: kidsError,
    currentPage: kidsPage,
    totalPages: kidsTotalPages,
  } = useSelector((state) => state.kidsR);

  const categoryMap = {
    movie: {
      data: movieData,
      loading: movieLoading,
      error: movieError,
      page: moviePage,
      totalPages: movieTotalPages,
      type: 'movie',
      genre: null,
    },
    drama: {
      data: dramaData,
      loading: dramaLoading,
      error: dramaError,
      page: dramaPage,
      totalPages: dramaTotalPages,
      type: 'tv',
      genre: 'drama',
    },
    animation: {
      data: aniData,
      loading: aniLoading,
      error: aniError,
      page: aniPage,
      totalPages: aniTotalPages,
      type: 'movie',
      genre: 'animation',
    },
    comedy: {
      data: comedyData,
      loading: comedyLoading,
      error: comedyError,
      page: comedyPage,
      totalPages: comedyTotalPages,
      type: 'tv',
      genre: 'comedy',
    },
    kids: {
      data: kidsData,
      loading: kidsLoading,
      error: kidsError,
      page: kidsPage,
      totalPages: kidsTotalPages,
      type: 'tv',
      genre: 'kids',
    },
  };

  const currentCategory = categoryMap[category];

  useEffect(() => {
    if (currentCategory) {
      dispatch(
        getContent({
          type: currentCategory.type,
          genre: currentCategory.genre,
          page: currentCategory.page,
          category: category,
        })
      );
    }
  }, [category]);

  if (currentCategory.loading) return <div>loading...</div>;
  if (currentCategory.error) return <div>Error: {currentCategory.error}</div>;

  return (
    <>
      <CateGoryWrap>
        <div>
          <h1>{category}</h1>
          <CategoryFilter />
        </div>
        <CategoryList data={currentCategory.data} category={category} />
      </CateGoryWrap>
    </>
  );
};

export default CateGoryPage;
