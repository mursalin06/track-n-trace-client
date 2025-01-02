import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const ManageMyItems = () => {
    const { user } = useContext(AuthContext);
    const postedItems = useLoaderData();
    const myPostedItems = postedItems.filter(item => item.contactEmail === user?.email);
    // console.log(postedItems, myPostedItems)  
    return (
        <div>
            <PageTitle title="Manage my items | Track n Trace"></PageTitle>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section >
                <div className="overflow-x-auto md:overflow-hidden rounded-lg w-full flex flex-col min-h-screen ">
            <h2 className="text-2xl md:text-4xl font-bold mt-6 text-blue-700 text-center mb-10">My Items</h2>
                    <table className="table lg:ml-28">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Thumbnail and Title</th>
                                <th>Post type</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myPostedItems.map(postedItem => <tr key={postedItem._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask  h-12 w-12">
                                                    <img
                                                        src={postedItem.thumbnail}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{postedItem.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {postedItem.postType}
                                    </td>
                                    <td>{postedItem.category}</td>
                                    <th>
                                       <div className="flex gap-2">
                                       <button className="btn text-white btn-success btn-sm">Update</button>
                                       <button className="btn text-white btn-error btn-sm ml-3">Delete</button>
                                       </div>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ManageMyItems;