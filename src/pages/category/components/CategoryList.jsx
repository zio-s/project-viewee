import { useNavigate } from 'react-router-dom';
import { CateGoryBox, CateGoryItem } from './style';

const CategoryList = ({ data, category }) => {
  const navigate = useNavigate();
  const bgurl = `https://image.tmdb.org/t/p/w500/`;

  const handleItemClick = (item) => {
    navigate(`/${category}/${item.id}`, {
      state: { type: item.first_air_date ? 'tv' : 'movie' },
    });
  };

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
