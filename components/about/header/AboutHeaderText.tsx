import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > h3 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
  }

  > p {
    font-size: 30px;
    line-height: 39px;
  }
`;

function AboutHeaderText() {
  return (
    <Container>
      <h3>About</h3>
      <p>
        Welcome to the Figma Store, a collection of Figma apparel (layers) and
        accessories (components) designed for our community.
      </p>
    </Container>
  );
}
export default AboutHeaderText;
