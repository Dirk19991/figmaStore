import styled from 'styled-components';
import AboutImage from './header/AboutImage';
import AboutHeaderText from './header/AboutHeaderText';
import Proceeds from './proceeds/Proceeds';
import FAQ from './faq/FAQ';
import CustomerCare from './customerCare/CustomerCare';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Header = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;

function AboutComponent() {
  return (
    <Wrapper>
      <Header>
        <AboutImage />
        <AboutHeaderText />
      </Header>
      <Proceeds />
      <FAQ />
      <CustomerCare />
    </Wrapper>
  );
}
export default AboutComponent;
