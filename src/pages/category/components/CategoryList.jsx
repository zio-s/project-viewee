import { useNavigate } from 'react-router-dom';
import { CateGoryBox, CateGoryItem } from './style';
import { useEffect } from 'react';

const CategoryList = ({ data, category }) => {
  const navigate = useNavigate();
  const bgurl = `https://image.tmdb.org/t/p/w500/`;

  const handleItemClick = (item) => {
    navigate(`/${category}/${item.id}`, {
      state: { type: item.first_air_date ? 'tv' : 'movie' },
    });
  };
  const preloadDetailImages = (items) => {
    items.forEach((item) => {
      const path = item.backdrop_path || item.poster_path;
      if (path) {
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/w1280${path}`;
      }
    });
  };
  useEffect(() => {
    if (data.length) {
      preloadDetailImages(data);
    }
  }, [data]);
  return (
    <CateGoryBox>
      {data?.map((item) => (
        <CateGoryItem key={item.id} onClick={() => handleItemClick(item)}>
          <img src={`${bgurl}${item.poster_path}`} alt={item.title || item.name} />
        </CateGoryItem>
      ))}
    </CateGoryBox>
  );
};

export default CategoryList;
