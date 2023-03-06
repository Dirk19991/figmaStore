import Grid from '../components/grid/Grid';
import Header from '../components/header/Header';
import SwiperComponent from '../components/swiper/Swiper';
import { getData } from './api/all';

export default function Home({ data }: AllProducts) {
  return (
    <>
      <SwiperComponent />
      <Grid data={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
}
