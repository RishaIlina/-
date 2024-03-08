import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayot = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayot;
