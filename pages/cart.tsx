import CartComponent from 'components/Cart/Cart';
import clientPromise from 'shared/libs/mongodb';

export default function Cart({ data }: AllProducts) {
  return <CartComponent data={data} />;
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;

    const db = client.db('figmaStore');

    const products = await db
      .collection<Product>('products')
      .find({})
      .sort({ metacritic: -1 })
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(products)) },
    };
  } catch (e) {
    console.error(e);
  }
}
