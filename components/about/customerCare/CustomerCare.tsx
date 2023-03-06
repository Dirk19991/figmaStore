import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
`;

const CustomerCareHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 57px;
  min-width: 45%;
  margin: 0;
`;

const CustomerCareText = styled.p`
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

function CustomerCare() {
  return (
    <Wrapper>
      <CustomerCareHeader>CUSTOMER CARE</CustomerCareHeader>
      <CustomerCareText>
        <Header>
          <div>
            <img src='/icons/aboutIcons/blueHalfOval.png' alt='blueHalfOval' />
          </div>
          <h4>Shipping</h4>
        </Header>
        <Paragraph>
          Once you’ve made a purchase, an e-mail confirmation will be sent to
          the e-mail address you provided. This e-mail acts as an invoice and
          includes your order number. Once your order is placed, it’ll ship from
          our warehouse within 2-5 business days. Orders placed after 11:00
          AM(EST) may be processed the next business day, and orders placed on
          weekends and holidays will be processed the following business day
          starting at 8:00 AM(EST). During peak periods, processing times may
          exceed 2 business days. Depending on your location, your order will be
          shipping from Canada, the United Kingdom, or the United States. You
          will not need to pay customs on your orders. Once your order has been
          shipped, you will receive an e-mail with your shipment’s tracking
          information, allowing you to keep tabs on the progress of your
          delivery.
        </Paragraph>

        <Header>
          <div>
            <img
              src='/icons/aboutIcons/yellowRectangle.png'
              alt='yellowRectangle'
            />
          </div>
          <h4>Returns</h4>
        </Header>
        <Paragraph>
          We currently do not accept returns and are unable to edit your order
          once placed. If you would like to cancel your order and replace it
          with a new one before it has shipped, please connect with
          thefigmastore@figma.com.
        </Paragraph>

        <Header>
          <div>
            <img
              src='/icons/aboutIcons/greenDoubleOval.png'
              alt='greenDoubleOval'
            />
          </div>
          <h4>Contact Us</h4>
        </Header>
        <Paragraph>
          You can contact support by emailing thefigmastore@figma.com.
        </Paragraph>
      </CustomerCareText>
    </Wrapper>
  );
}
export default CustomerCare;
