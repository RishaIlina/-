import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => (
  <MainLayout>
      <Component {...pageProps} />
  </MainLayout>
);

export default App;