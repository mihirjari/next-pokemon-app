import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {

    return (
        <>
            <Navbar />

            <div style={{height: "auto"}}>{children}</div>

            <Footer />
        </>
    )
}

export default Layout;