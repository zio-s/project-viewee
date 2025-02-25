import React from 'react';
import { ActiveText, Banner, BoldText, Card, CardContainer, Text } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardData = [
  {
    bannerImage: '/images/banenrFigure1.png',
    num: '/movie/532444',
    genre: '로코 & 멜로',
    logo: '/images/banner2Logo1.png',
    icon: '/images/banner2Icon1.png',
    item: '/images/banner2Item1.png',
    text: '너의 결혼식',
    boldText: '이 사람이구나 느낌이 오는 시간이 3초래',
  },
  {
    bannerImage: '/images/bannerFigure2.png',
    num: '/tv/205319',
    genre: 'TV드라마',
    logo: '/images/banner2Logo2.png',
    icon: '/images/banner2Icon2.png',
    item: '/images/banner2Item2.png',
    text: '정신병동에도 아침이 와요',
    boldText: `안녕하세요! '다시' 좋은 아침입니다!`,
  },
  {
    bannerImage: '/images/bannerFigure3.png',
    num: '/tv/238276',
    genre: '예능 & 토크',
    logo: '/images/banner2Logo3.png',
    icon: '/images/banner2Icon3.png',
    item: '/images/banner2Item3.png',
    text: '나영석의 와글와글',
    boldText: `MBTI 'I'들만 모인 오후의 티타임`,
  },
];

const SpecialEdition2 = () => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      {CardData.map((data, index) => (
        <Card className="inner" key={index}>
          <motion.div className="bannerWrapper" whileHover="hover">
            <Banner bgImage={data.bannerImage} className="banner">
              <img src={data.logo} alt="" className={`banner2Logo${index + 1}`} />
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
              className={`banner2Item${index + 1}`}
              variants={{
                hover: {
                  y: [-5, -10, -5],
                  transition: { duration: 0.7, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                },
              }}
            />
          </motion.div>

          <div className="textArea">
            <div>
              <img src={data.icon} alt="" className={`banner2Icon${index + 1}`} />
            </div>
            <Text>{data.text}</Text>
            <BoldText>{data.boldText}</BoldText>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
};

export default SpecialEdition2;
