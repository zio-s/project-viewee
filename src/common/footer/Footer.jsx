import Button from '../button';
import { FooterWrap } from './style';

const Footer = () => {
  return (
    <FooterWrap>
      <div>footer</div>
      <Button variant="primary" size="large">
        바로가기
      </Button>
    </FooterWrap>
  );
};

export default Footer;
