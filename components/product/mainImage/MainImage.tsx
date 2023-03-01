import styled from 'styled-components';

interface MainImageProps {
  chosenImage: string;
}

const StyledMainImage = styled.div`
  width: 600px;
  max-height: 900px;
  border-radius: 100px;
  overflow: hidden;
  background-color: #e8e8e8;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 2/3;
  }
`;

function MainImage({ chosenImage }: MainImageProps) {
  return (
    <StyledMainImage>
      <img src={chosenImage} alt='image' />
    </StyledMainImage>
  );
}
export default MainImage;
