import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PostDetails = () => {
    const postData = useLoaderData();
    console.log(postData);
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section>
                DETAILS OF - {postData.title}
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default PostDetails;