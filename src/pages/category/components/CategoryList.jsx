import { useNavigate } from 'react-router-dom';
import { CateGoryBox, CateGoryItem } from './style';
import { useEffect, useRef, useCallback } from 'react';

const CategoryList = ({ data, category, onLoadMore, hasMore, isLoading }) => {
  const navigate = useNavigate();
  const loadingRef = useRef(null);
  const bgurl = `https://image.tmdb.org/t/p/w500/`;

  const handleItemClick = useCallback(
    (item) => {
      navigate(`/${category}/${item.id}`, {
        state: { type: item.first_air_date ? 'tv' : 'movie' },
      });
    },
    [category, navigate]
  );

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        onLoadMore();
      }
    },
    [hasMore, isLoading, onLoadMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    });

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <CateGoryBox>
      {data?.map((item) => (
        <CateGoryItem key={item.id} onClick={() => handleItemClick(item)}>
          <img src={`${bgurl}${item.poster_path}`} alt={item.title || item.name} loading="lazy" />
        </CateGoryItem>
      ))}
      {hasMore && <div ref={loadingRef} style={{ height: '20px' }} />}
      {isLoading && <div>Loading more...</div>}
    </CateGoryBox>
  );
};

export default CategoryList;
