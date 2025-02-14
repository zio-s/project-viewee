import React from 'react';
import { ActiveText, Banner, BoldText, Card, CardContainer, Text } from './style';
import { Link } from 'react-router';

const CardData = [
  {
    bannerColor: 'var(--primary-50)',
    logo: '/images/bannerLogo1.png',
    icon: '/images/bannerIcon1.png',
    item: '/images/bannerItem1.png',
    text: '길복순',
    boldText: '죽을 때 까지 숨길 것 \n숨기지 못한다면 죽일 것',
  },
  {
    bannerColor: '#2563eb',
    logo: '/images/bannerLogo2.png',
    icon: '/images/bannerIcon2.png',
    item: '/images/bannerItem2.png',
    text: 'D.P.',
    boldText: '나는 군인을 잡는\n군인이다',
  },
  {
    bannerColor: 'var(--secondary-50',
    logo: '/images/bannerLogo3.png',
    icon: '/images/bannerIcon3.png',
    item: '/images/bannerItem3.png',
    text: '유퀴즈온더블럭',
    boldText: '구교환의 \n구며들 수밖에 없는 모먼트',
  },
];

const SpecialEdition = () => {
  return (
    <CardContainer>
      <Card className="inner">
        <Banner style={{ background: CardData[0].bannerColor }}>
          <img src={CardData[0].logo} alt="" className="bannerLogo1" />
          <ActiveText className="activeText">
            <div className="">액션 & 범죄</div>

            <Link className="goToPlay" href="/login">
              <span>보러가기</span>
              <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_630_1220)">
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

        <div>
          <img src={CardData[0].item} alt="" className="bannerItem1" />
        </div>
        <div className="textArea">
          <div>
            <img src={CardData[0].icon} alt="" className="bannerIcon1" />
          </div>
          <Text>{CardData[0].text}</Text>
          <BoldText>{CardData[0].boldText}</BoldText>
        </div>
      </Card>
      <Card className="inner">
        <Banner style={{ background: CardData[1].bannerColor }}>
          <img src={CardData[1].logo} alt="" className="bannerLogo2" />
          <ActiveText className="activeText">
            <div className="">액션 & 범죄</div>

            <Link className="goToPlay" href="/login">
              <span>보러가기</span>
              <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_630_1220)">
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

        <div>
          <img src={CardData[1].item} alt="" className="bannerItem2" />
        </div>
        <div className="textArea">
          <div>
            <img src={CardData[1].icon} alt="" className="bannerIcon2" />
          </div>
          <Text>{CardData[1].text}</Text>
          <BoldText>{CardData[1].boldText}</BoldText>
        </div>
      </Card>

      <Card className="inner">
        <Banner style={{ background: CardData[2].bannerColor }}>
          <img src={CardData[2].logo} alt="" className="bannerLogo3" />
          <ActiveText className="activeText">
            <div className="">액션 & 범죄</div>

            <Link className="goToPlay" href="/login">
              <span>보러가기</span>
              <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_630_1220)">
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

        <div>
          <img src={CardData[2].item} alt="" className="bannerItem3" />
        </div>
        <div className="textArea">
          <div>
            <img src={CardData[2].icon} alt="" className="bannerIcon" />
          </div>
          <Text>{CardData[2].text}</Text>
          <BoldText>{CardData[2].boldText}</BoldText>
        </div>
      </Card>
    </CardContainer>
  );
};

export default SpecialEdition;
