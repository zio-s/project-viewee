import React from 'react';
import { ActiveText, Banner, BoldText, Card, CardContainer, Text } from './style';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardData = [
  {
    bannerImage: '/images/banenrFigure1.png',
    genre: '액션 & 범죄',
    logo: '/images/bannerLogo1.png',
    icon: '/images/bannerIcon1.png',
    item: '/images/bannerItem1.png',
    text: '길복순',
    boldText: '죽을 때 까지 숨길 것 \n숨기지 못한다면 죽일 것',
    num: '/movie/849869',
  },
  {
    bannerImage: '/images/bannerFigure2.png',
    genre: '액션 & 범죄',
    logo: '/images/bannerLogo2.png',
    icon: '/images/bannerIcon2.png',
    item: '/images/bannerItem2.png',
    text: 'D.P.',
    boldText: '나는 군인을 잡는\n군인이다',
    num: '/category/110534',
  },
  {
    bannerImage: '/images/bannerFigure3.png',
    genre: '예능 & 토크',
    logo: '/images/bannerLogo3.png',
    icon: '/images/bannerIcon3.png',
    item: '/images/bannerItem3.png',
    text: '유퀴즈온더블럭',
    boldText: '구교환의 \n구며들 수밖에 없는 모먼트',
    num: '/tv/81978',
  },
];

const SpecialEdition = () => {
  return (
    <CardContainer>
      {CardData.map((data, index) => (
        <Card className="inner" key={index}>
          <motion.div className="bannerWrapper" whileHover="hover">
            <Banner bgImage={data.bannerImage} className="banner">
              <img src={data.logo} alt="" className={`bannerLogo${index + 1}`} />
              <ActiveText className="activeText">
                <div className="">{data.genre}</div>
                <div
                  className={`pointLine ${
                    index === 1 ? 'pointLinePink' : index === 2 ? 'pointLineBlue' : 'pointLineDefault'
                  }`}
                ></div>
                <Link className="goToPlay" to={`${data.num}`}>
                  <span>보러가기</span>
                  <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_630_1220)">
                      <path
                        d="M35.0831 26.2461C35.0831 25.7229 34.874 25.2416 34.4763 24.865L17.9026 8.62612C17.526 8.27037 17.0656 8.08203 16.5215 8.08203C15.4542 8.08203 14.6172 8.89816 14.6172 9.98633C14.6172 10.5095 14.8265 10.9908 15.1613 11.3465L30.3957 26.2461L15.1613 41.1456C14.8265 41.5013 14.6172 41.9619 14.6172 42.5058C14.6172 43.594 15.4542 44.4102 16.5215 44.4102C17.0656 44.4102 17.526 44.2219 17.9026 43.8451L34.4763 27.6272C34.874 27.2297 35.0831 26.7692 35.0831 26.2461Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_630_1220">
                        <rect width="20.4659" height="36.3491" fill="white" transform="translate(14.6172 8.08203)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </ActiveText>
            </Banner>

            <motion.img
              src={data.item}
              alt=""
              className={`bannerItem${index + 1}`}
              variants={{
                hover: {
                  y: [-5, -10, -5],
                  transition: { duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                },
              }}
            />
          </motion.div>

          <div className="textArea">
            <div>
              <img src={data.icon} alt="" className={`bannerIcon${index + 1}`} />
            </div>
            <Text>{data.text}</Text>
            <BoldText>{data.boldText}</BoldText>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
};

export default SpecialEdition;
