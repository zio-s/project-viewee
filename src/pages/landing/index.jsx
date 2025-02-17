import CardSection from './components/CardSection';
import Hero from './components/Hero';
import ReviewSection from './components/ReviewSection';
import ScrollSection from './components/ScrollSection';
import { LandingWrap } from './style';

const LandingPage = () => {
  return (
    <LandingWrap>
      <Hero />
      <CardSection />
      {/* <ReviewSection /> */}
      {/* <ScrollSection /> */}
    </LandingWrap>
  );
};

export default LandingPage;
