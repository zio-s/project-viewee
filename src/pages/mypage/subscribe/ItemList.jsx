import Button from '../../../ui/button/defaultButton';
import { ItemListWrap } from './style';

const ItemList = ({ title, content, price, toggle }) => {
  const koPrice = price.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
  return (
    <ItemListWrap>
      <div className="title">
        <h3>{title} Plan</h3>
        <p>{content}</p>
      </div>
      <div className="priceper">
        <div className="price">{koPrice}</div>
        <div className="toggle">/{toggle}</div>
      </div>
      <div className="button">
        <Button className="black">Start Free Trial</Button>
        <Button variant="primary">Choose Plan</Button>
      </div>
    </ItemListWrap>
  );
};

export default ItemList;
