import "../styles/globals.css";
import { CartProvider } from '@mrvautin/react-shoppingcart';
import MainLayout from "../Layouts/MainLayout";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => (
  <CartProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </CartProvider>
    
);

export default App;
