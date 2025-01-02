import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import AllItemsCard from "../components/AllItemsCard";

const LostAndFoundItems = () => {

    const allItems = useLoaderData();
    console.log(allItems)

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <PageTitle title="Lost n Found items | Track n Trace"></PageTitle>

            <div>
                <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-700 text-center">All Lost and Found Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-10">
                    {
                        allItems.map(item => <AllItemsCard item={item} key={item._id}></AllItemsCard>)
                    }
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default LostAndFoundItems;