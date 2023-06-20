import CartComponent from 'components/Cart/Cart';
import clientPromise from 'shared/libs/mongodb';

function Cart({ data }: AllProducts) {
  return <CartComponent data={data} />;
}
export default Cart;

export async function getStaticProps() {
  try {
    const client = await clientPromise;

    const db = client.db('figmaStore');

    const products = await db
      .collection<Product>('products')
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(products)) },
    };
  } catch (e) {
    console.error(e);
  }
}
