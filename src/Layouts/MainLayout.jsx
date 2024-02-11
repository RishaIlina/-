import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayot = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default MainLayot;