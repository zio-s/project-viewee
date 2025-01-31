import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
    --background-color: #1c1c1e;

    /* Primary Colors (Pink) */
    --primary-10: rgb(254, 239, 242);  /* rgb(254, 239, 242) */
    --primary-20: rgb(253, 230, 236);  /* rgb(253, 230, 236) */
    --primary-30: rgb(250, 204, 215);  /* rgb(250, 204, 215) */
    --primary-40: rgb(245, 126, 154);  /* rgb(245, 126, 154) */
    --primary-50: rgb(240, 90, 126);   /* rgb(240, 90, 126) */
    --primary-60: rgb(216, 81, 113);   /* rgb(216, 81, 113) */
    --primary-70: rgb(192, 72, 100);   /* rgb(192, 72, 100) */
    --primary-80: rgb(144, 54, 75);    /* rgb(144, 54, 75) */
    --primary-90: rgb(108, 40, 56);    /* rgb(108, 40, 56) */

    /* Secondary Colors (Yellow) */
    --secondary-10: rgb(255, 248, 224);  /* rgb(255, 248, 224) */
    --secondary-20: rgb(255, 242, 201);  /* rgb(255, 242, 201) */
    --secondary-30: rgb(255, 218, 94);   /* rgb(255, 218, 94) */
    --secondary-40: rgb(255, 218, 94);   /* rgb(255, 218, 94) */
    --secondary-50: rgb(255, 208, 52);   /* rgb(255, 208, 52) */
    --secondary-60: rgb(222, 177, 27);   /* rgb(222, 177, 27) */
    --secondary-70: rgb(153, 125, 32);   /* rgb(153, 125, 32) */
    --secondary-80: rgb(105, 86, 21);    /* rgb(105, 86, 21) */
    --secondary-90: rgb(75, 61, 15);     /* rgb(75, 61, 15) */

    /* Gray Scale */
    --gray-0: rgb(255, 255, 255);    /* White */
    --gray-10: rgb(241, 241, 241);   /* rgb(241, 241, 241) */
    --gray-20: rgb(221, 221, 221);   /* rgb(221, 221, 221) */
    --gray-30: rgb(206, 206, 206);   /* rgb(206, 206, 206) */
    --gray-40: rgb(185, 185, 185);   /* rgb(185, 185, 185) */
    --gray-50: rgb(146, 146, 146);   /* rgb(146, 146, 146) */
    --gray-60: rgb(95, 95, 95);      /* rgb(95, 95, 95) */
    --gray-70: rgb(80, 80, 80);      /* rgb(80, 80, 80) */
    --gray-80: rgb(51, 51, 51);      /* rgb(51, 51, 51) */
    --gray-90: rgb(28, 28, 30);      /* rgb(28, 28, 30) */

    /* Semantic Colors */
    --text-primary: var(--gray-0);
    --text-secondary: var(--gray-40);
    --background-primary: var(--gray-90);
    --background-secondary: var(--gray-80);
    --hover-color: var(--primary-50);
    --border-color: var(--gray-70);
  }
  

  //reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
  body {
    font-size: 16px;
    line-height: 1.2;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color:var(--gray-0);
    background-color: var(--background-color);
    -webkit-overflow-scrolling: touch;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:var(--gray-0);
  }
  ol,li { list-style:none }
  img { vertical-align: top; border: 0; }
  select {
    border: 0;
    background: none;
    appearance: none;
    &:focus {
      outline: none;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  input,
  button,
  textarea {
    font-family: inherit;
    border: 0;
    background-color: transparent;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  
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
