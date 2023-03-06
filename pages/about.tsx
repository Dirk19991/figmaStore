import styled from 'styled-components';
import AboutComponent from '../components/about/AboutComponent';

const Max = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;
  display: flex;
  justify-content: space-between;
`;

export default function About() {
  return <AboutComponent />;
}
