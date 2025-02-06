import { ItemImg } from './style';

const ItemList = ({ item }) => {
  const { backdrop_path } = item;
  const bgurl = `https://image.tmdb.org/t/p/w500/`;
  return (
    <ItemImg>
      <img src={`${bgurl}${backdrop_path}`} alt="" />
    </ItemImg>
  );
};

export default ItemList;
