import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 54px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  margin-top: 120px;
  margin-bottom: 120px;
`;

function GridHeader() {
  return (
    <StyledHeader>
      FIGMA'S <img src='./icons/snowflake.svg' alt='snowflake' /> COLLECTION{' '}
      <img src='./icons/hourglass.svg' alt='hourglass' /> OF LAYERS{' '}
      <img src='./icons/zigzag.svg' alt='zigzag' /> AND{' '}
      <img src='./icons/dots.svg' alt='dots' /> COMPONENTS{' '}
      <img src='./icons/sun.svg' alt='sun' /> FOR YOU{' '}
      <img src='./icons/comet.svg' alt='comet' /> AND{' '}
      <img src='./icons/snake.svg' alt='snake' /> YOUR{' '}
      <img src='./icons/triangle.svg' alt='triangle' /> FRIENDS
    </StyledHeader>
  );
}
export default GridHeader;
