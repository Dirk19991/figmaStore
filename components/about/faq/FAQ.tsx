import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
`;

const FAQHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 57px;
  min-width: 45%;
  margin: 0;
`;

const FAQText = styled.p`
  font-size: 30px;
  line-height: 39px;
  min-width: 45%;
  margin: 0;

  > :first-child {
    margin-top: 0px;
  }
`;

const Header = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;

  > div {
    height: 30px;
    width: 30px;

    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  > h4 {
    font-size: 26px;
    line-height: 32px;
    font-weight: 700;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  margin-top: 15px;
`;

function FAQ() {
  return (
    <Wrapper>
      <FAQHeader>FAQ</FAQHeader>
      <FAQText>
        <Header>
          <div>
            <img src='/icons/aboutIcons/blueCircles.png' alt='blueCircles' />
          </div>
          <h4>How does your apparel fit?</h4>
        </Header>
        <Paragraph>
          Our sizing is unisex. For a more tailored fit, we recommend that you
          size down.
        </Paragraph>

        <Header>
          <div>
            <img src='/icons/aboutIcons/redWave.png' alt='redWave' />
          </div>
          <h4>Where do you ship?</h4>
        </Header>
        <Paragraph>
          We currently ship to Canada, Japan, the United Kingdom, and the United
          States. We’ve learned through the process of building out a swag store
          that shipping across the world is really hard. We’re working with our
          vendors to expand warehousing and shipping and hope to bring the Figma
          store to more countries in 2022.
        </Paragraph>

        <Header>
          <div>
            <img
              src='/icons/aboutIcons/yellowRectangle.png'
              alt='yellowRectangle'
            />
          </div>
          <h4>When will I get my order?</h4>
        </Header>
        <Paragraph>
          Your order will ship within 3-5 business days. You’ll get an e-mail
          with the tracking info to follow it along the way. Shipping timelines
          will vary based on location, but you can expect your order to arrive
          2-10 days after shipment.
        </Paragraph>

        <Header>
          <div>
            <img src='/icons/aboutIcons/greenPolygon.png' alt='greenPolygon' />
          </div>
          <h4>What if my package never came?</h4>
        </Header>
        <Paragraph>
          Reach out to thefigmastore@figma.com if you place an order and don’t
          receive a shipping notice within 5 business days OR if your order
          hasn’t arrived 10 days after it has shipped.
        </Paragraph>

        <Header>
          <div>
            <img src='/icons/aboutIcons/redOval.png' alt='redOval' />
          </div>
          <h4>Can I edit or cancel my order once it’s placed?</h4>
        </Header>
        <Paragraph>
          You are unable to edit your order once placed, but if you would like
          to cancel it, please connect with thefigmastore@figma.com.
        </Paragraph>

        <Header>
          <div>
            <img src='/icons/aboutIcons/yellowOval.png' alt='yellowOval' />
          </div>
          <h4>How do I contact support?</h4>
        </Header>
        <Paragraph>
          You can contact support by e-mailing thefigmastore@figma.com
        </Paragraph>
      </FAQText>
    </Wrapper>
  );
}
export default FAQ;
