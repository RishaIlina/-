import Head from "next/head";
import HomeDetails from "../components/HomeDetails/HomeDetails";

/* Домашнаяя страница */
const Home = () => {
  return (
    <>
      <Head>
        <title>Магазин свечей</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HomeDetails />
    </>
  );
};

export default Home;
