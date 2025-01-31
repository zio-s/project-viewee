import Button from '../button';
import { FooterWrap } from './style';

const Footer = () => {
  return (
    <FooterWrap>
      <div>footer</div>
      <Button variant='gray' size='medium'>
        바로가기
      </Button>
    </FooterWrap>
  );
};

export default Footer;
