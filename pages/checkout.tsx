import clientPromise from 'shared/libs/mongodb';
import CheckoutComponent from 'widgets/CheckoutComponent/CheckoutComponent';

export default function Checkout({ data }: AllProducts) {
  return <CheckoutComponent data={data} />;
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
