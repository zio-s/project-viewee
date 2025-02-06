import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import { FooterWrap } from './style';
import { useEffect } from 'react';
import { getContent } from '../../store/modules/getThunk';

const Footer = () => {
  const { movies } = useSelector((state) => state.tmdbR);
  const { tvShows } = useSelector((state) => state.tmdbR);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent({ type: 'tv', category: 'popular' }));
    dispatch(getContent({ type: 'movie', category: 'now_playing', genre: 'drama' }));
    // dispatch(getContent({ type: 'movie', category: 'now_playing', genre: 'animation' }));
  }, []);
  return (
    <FooterWrap>
      <div>footer</div>
      {movies && movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
      {tvShows.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Button variant="primary" size="large">
        바로가기
      </Button>
    </FooterWrap>
  );
};

export default Footer;
