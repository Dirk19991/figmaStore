import Product from 'widgets/Product/Product';
import clientPromise from '../../shared/libs/mongodb';

interface ProductParams {
  params: { productName: string };
}

const ProductPage = ({ data }: { data: Product }) => {
  return <Product data={data} />;
};

export async function getStaticPaths() {
  try {
    const client = await clientPromise;

    const db = client.db('figmaStore');

    const products = await db
      .collection<Product>('products')
      .find({})
      .sort({ metacritic: -1 })
      .toArray();

    const paths = products.map((elem) => {
      return {
        params: {
          productName: elem.title.toLowerCase().split(' ').join('-'),
        },
      };
    });

    return { paths: paths, fallback: false };
  } catch (e) {
    console.error(e);
  }
}

export async function getStaticProps({ params }: ProductParams) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const formattedName = params.productName.replaceAll('-', ' ');

  let dataArr;

  try {
    const client = await clientPromise;

    const db = client.db('figmaStore');
    const regexp = new RegExp(formattedName, 'i');
    dataArr = (await db
      .collection<Product>('products')
      .find({ title: regexp })
      .sort({ metacritic: -1 })
      .toArray()) as Product[];

    const data = JSON.parse(JSON.stringify(dataArr[0]));

    return { props: { data } };
  } catch (e) {
    console.error(e);
  }

  // Pass post data to the page via props
}

export default ProductPage;
