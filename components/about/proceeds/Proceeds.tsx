import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
`;

const ProceedsHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 57px;
  min-width: 45%;
  margin: 0;
`;

const ProceedsText = styled.p`
  font-size: 30px;
  line-height: 39px;
  min-width: 45%;
  margin: 0;
`;

const TIST = styled.p`
  margin-top: 60px;
  font-size: 30px;
  font-weight: 700;
`;

function Proceeds() {
  return (
    <Wrapper>
      <ProceedsHeader>100% OF PROCEEDS ARE DONATED</ProceedsHeader>
      <ProceedsText>
        <p>
          Any and all profits we generate from the store will be used to
          purchase carbon removal credits via reforestation from TIST (The
          International Small Group and Tree Planting Program). TIST is an
          innovative time-tested reforestation program that supports subsistence
          farmers in Kenya, Uganda, and Tanzania to tackle sustainable
          development and climate change through education and tree planting.
        </p>

        <TIST>
          <a href='https://program.tist.org/'>Learn more about TIST ↗</a>
        </TIST>
      </ProceedsText>
    </Wrapper>
  );
}
export default Proceeds;
