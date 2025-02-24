import { useNavigate } from 'react-router-dom';
import { ItemCard, ListContainer, LoadingSpinner } from './style';
import { useEffect, useRef, useCallback } from 'react';

const CategoryList = ({ data, category, onLoadMore, hasMore, isLoading }) => {
  const navigate = useNavigate();
  const loadingRef = useRef(null);
  const observerRef = useRef(null);
  const bgurl = `https://image.tmdb.org/t/p/w500/`;

  const handleItemClick = useCallback(
    (item) => {
      const mediaType = item.media_type || (item.first_air_date ? 'tv' : 'movie');

      navigate(`/${mediaType}/${item.id}`, {
        state: { type: mediaType },
      });
    },
    [navigate]
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
    <>
      <ListContainer ref={observerRef}>
        {data?.map((item) => (
          <div onClick={() => handleItemClick(item)} key={item.id} style={{ textDecoration: 'none' }}>
            <ItemCard>
              <div className="poster-wrap">
                <img src={`${bgurl}${item.poster_path}`} alt={item.title || item.name} loading="lazy" />
                <div className="item-info">
                  <h3>{item.title || item.name}</h3>
                  <div className="item-meta">
                    <span>{item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0]}</span>
                    <span className="rating">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" />
                      </svg>
                      {item.vote_average?.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </ItemCard>
          </div>
        ))}
      </ListContainer>
      {isLoading && <LoadingSpinner>콘텐츠를 불러오는 중...</LoadingSpinner>}
      <div ref={loadingRef} style={{ height: '1px' }} />
    </>
  );
};

export default CategoryList;
