import styles from './FAQ.module.scss';

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.bigHeader}>FAQ</h2>
      <div className={styles.text}>
        <div className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/blueCircles.png' alt='blueCircles' />
          </div>
          <h4>How does your apparel fit?</h4>
        </div>
        <p className={styles.paragraph}>
          Our sizing is unisex. For a more tailored fit, we recommend that you
          size down.
        </p>

        <div className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/redWave.png' alt='redWave' />
          </div>
          <h4>Where do you ship?</h4>
        </div>
        <p className={styles.paragraph}>
          We currently ship to Canada, Japan, the United Kingdom, and the United
          States. We’ve learned through the process of building out a swag store
          that shipping across the world is really hard. We’re working with our
          vendors to expand warehousing and shipping and hope to bring the Figma
          store to more countries in 2022.
        </p>

        <div className={styles.smallHeader}>
          <div>
            <img
              src='/icons/aboutIcons/yellowRectangle.png'
              alt='yellowRectangle'
            />
          </div>
          <h4>When will I get my order?</h4>
        </div>
        <p className={styles.paragraph}>
          Your order will ship within 3-5 business days. You’ll get an e-mail
          with the tracking info to follow it along the way. Shipping timelines
          will vary based on location, but you can expect your order to arrive
          2-10 days after shipment.
        </p>

        <div className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/greenPolygon.png' alt='greenPolygon' />
          </div>
          <h4>What if my package never came?</h4>
        </div>
        <p className={styles.paragraph}>
          Reach out to thefigmastore@figma.com if you place an order and don’t
          receive a shipping notice within 5 business days OR if your order
          hasn’t arrived 10 days after it has shipped.
        </p>

        <div className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/redOval.png' alt='redOval' />
          </div>
          <h4>Can I edit or cancel my order once it’s placed?</h4>
        </div>
        <p className={styles.paragraph}>
          You are unable to edit your order once placed, but if you would like
          to cancel it, please connect with thefigmastore@figma.com.
        </p>

        <div className={styles.smallHeader}>
          <div>
            <img src='/icons/aboutIcons/yellowOval.png' alt='yellowOval' />
          </div>
          <h4>How do I contact support?</h4>
        </div>
        <p className={styles.paragraph}>
          You can contact support by e-mailing thefigmastore@figma.com
        </p>
      </div>
    </div>
  );
}
export default FAQ;
