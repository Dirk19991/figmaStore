import styles from './CustomerCare.module.scss';

function CustomerCare() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.bigHeader}>CUSTOMER CARE</h2>
      <div className={styles.text}>
        <header className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/blueHalfOval.png' alt='blueHalfOval' />
          </div>
          <h4>Shipping</h4>
        </header>
        <p className={styles.paragraph}>
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
        </p>

        <header className={styles.smallHeader}>
          <div>
            <img
              src='/icons/aboutIcons/yellowRectangle.png'
              alt='yellowRectangle'
            />
          </div>
          <h4>Returns</h4>
        </header>
        <p className={styles.paragraph}>
          We currently do not accept returns and are unable to edit your order
          once placed. If you would like to cancel your order and replace it
          with a new one before it has shipped, please connect with
          thefigmastore@figma.com.
        </p>

        <header className={styles.smallHeader}>
          <div>
            <img
              src='/icons/aboutIcons/greenDoubleOval.png'
              alt='greenDoubleOval'
            />
          </div>
          <h4>Contact Us</h4>
        </header>
        <p className={styles.paragraph}>
          You can contact support by emailing thefigmastore@figma.com.
        </p>
      </div>
    </div>
  );
}
export default CustomerCare;
