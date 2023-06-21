import Grid from 'widgets/Grid/Grid';
import SwiperComponent from 'components/Swiper/Swiper';
import clientPromise from '../shared/libs/mongodb';

export default function Home({ data }: AllProducts) {
  return (
    <>
      <SwiperComponent />
      <Grid data={data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;

    const db = client.db('figmaStore');

    const products = await db
      .collection<Product>('products')
      .find({})
      .sort({ metacritic: -1 })
      .limit(30)
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(products)) },
    };
  } catch (e) {
    console.error(e);
  }
}
