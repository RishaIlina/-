import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";
import { CartProvider } from "../components/CartContext/CartContext";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </CartProvider>
  );
};

export default App;
