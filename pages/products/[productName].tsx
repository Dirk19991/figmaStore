import { useRouter } from 'next/router';
import Product from '../../components/product/Product';
import { getData } from '../api/all';
import { getProductData } from '../api/product';

interface ProductParams {
  params: { productName: string };
}

const ProductPage = ({ data }: { data: Product }) => {
  return <Product data={data} />;
};

export async function getStaticPaths() {
  const data = await getData();
  const paths = data.map((elem) => ({
    params: { productName: elem.title.toLowerCase().split(' ').join('-') },
  }));

  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }: ProductParams) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const data = await getProductData(params.productName);

  // Pass post data to the page via props
  return { props: { data } };
}

export default ProductPage;
