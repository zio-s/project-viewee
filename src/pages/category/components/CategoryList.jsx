import { CateGoryBox, CateGoryItem } from './style';

const CategoryList = ({ data }) => {
  const bgurl = `https://image.tmdb.org/t/p/w500/`;
  return (
    <CateGoryBox>
      {data?.map((item) => (
        <CateGoryItem key={item.id} className="content-item">
          <img src={`${bgurl}${item.poster_path}`} alt={item.title || item.name} />
        </CateGoryItem>
      ))}
    </CateGoryBox>
  );
};

export default CategoryList;
