import { useDispatch, useSelector } from 'react-redux';
import { FooterWrap } from './style';
import { useEffect } from 'react';
import { getContent } from '../../store/modules/getThunk';
import { tmdbActions } from '../../store/modules/tmdbSlice';
import ItemList from './itemList';
const Footer = () => {
  const { movies, tvShows, loading } = useSelector((state) => state.tmdbR);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getContent({
        type: 'tv',
        category: 'popular',
        page: tvShows.currentPage,
      })
    );
    dispatch(
      getContent({
        type: 'movie',
        category: 'now_playing',
        genre: 'drama',
        page: movies.currentPage,
      })
    );
  }, [dispatch, movies.currentPage, tvShows.currentPage]);

  const handleNextPage = (contentType) => {
    const content = contentType === 'movie' ? movies : tvShows;
    if (content.currentPage < content.totalPages) {
      dispatch(
        tmdbActions.setPage({
          contentType,
          page: content.currentPage + 1,
        })
      );
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <FooterWrap>
      <div>Movies</div>
      {movies.data.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      <button onClick={() => handleNextPage('movie')} disabled={movies.currentPage === movies.totalPages}>
        다음 영화
      </button>
      {movies.data.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </FooterWrap>
  );
};

export default Footer;
