import Head from "next/head";
import HomePage from "../components/HomePage/HomePage";

/* Домашнаяя страница */
const Home = () => {
  return (
    <>
      <Head>
        <title>Магазин свечей</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HomePage />
    </>
  );
};

export default Home;
