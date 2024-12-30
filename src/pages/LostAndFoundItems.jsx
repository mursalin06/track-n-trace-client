import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

const LostAndFoundItems = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <PageTitle title="Lost n Found items | Track n Trace"></PageTitle>

            <div className="min-h-screen">
                Lost n found pages
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default LostAndFoundItems;