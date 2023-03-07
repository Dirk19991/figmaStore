import Grid from '../components/grid/Grid';
import Header from '../components/header/Header';
import SwiperComponent from '../components/swiper/Swiper';
import { getData } from './api/all';

export default function Home({ data }: { data: string }) {
  const parsedData = JSON.parse(data) as Product[];

  return (
    <>
      <SwiperComponent />
      <Grid data={data} />
    </>
  );
}

export async function getStaticProps() {
  const rawData = await getData();
  const data = JSON.stringify(rawData);

  return {
    props: {
      data,
    },
  };
}
