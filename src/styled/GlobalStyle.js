import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
    --primary-color: #F05A7E;
    --secondary-color: #6c757d;
    --text-color: #fff;
    --background-color: #1c1c1e;
  }
  





  body {
    font-size: 16px;
    line-height: 1.2;
    font-family: 'Noto Sans KR', sans-serif;
    color:var(--text-color);
    background-color: var(--background-color);
  }
  a {
    text-decoration: none;
    color:var(--text-color);
  }
  li { list-style:none }
  img { vertical-align: top; }


  
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


  
  .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative; padding:120px 0; }
  .main { width: 100%; }

  button { border:none; cursor: pointer; }
  .hide{
     overflow: hidden;
     text-indent: -99999px;
     width: 0;
     height: 0;
     font-size: 0;
     line-height: 0;
  }
`;

export default GlobalStyle;
