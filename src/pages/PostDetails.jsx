import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PostDetails = () => {
    const postData = useLoaderData();
    const { thumbnail, title, location, category, postType, description, formattedDate, contactDisplayName, contactEmail } = postData;
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-dvh flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="card card-compact bg-base-200 my-10 border md:w-[600px] shadow-2xl">
                        <figure>
                            <img className="h-[335px] w-full"
                                src={thumbnail} />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                            <h2 className="card-title">Title :  {title}</h2>
                            <h3 className="badge badge-neutral">{postType}</h3>
                            </div>
                            <div className="space-y-3">
                                    <p><span className="text-lg font-bold">Description :</span>  {description}</p>
                                    <p><span className="text-md font-bold">Location :</span>  {location}</p>
                                    <p><span className="text-md font-bold">Date :</span>  {formattedDate}</p>
                                    <p><span className="text-md font-bold">Item Category :</span>  {category}</p>
                                    <ul><span className="text-md font-bold">Contact :</span>  <li>
                                        <span className="font-medium">Name -</span>  {contactDisplayName}</li>
                                        <li><span className="font-medium">Email -</span>  {contactEmail}</li></ul>
                            </div>
                            <div className="card-actions">
                               <div className="flex justify-center my-2">
                               <Link><button className="btn btn-primary btn-sm">Found This!</button></Link>
                               {/* <Link><button className="btn btn-primary btn-sm">his is Mine!</button></Link> */}
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default PostDetails;