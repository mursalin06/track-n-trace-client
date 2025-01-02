const AllItemsCard = ({ item }) => {
    const { thumbnail, title, location, category } = item;
    return (
        <div className="flex justify-center items-center">
            <div className="card card-compact bg-base-200 border md:w-[400px] shadow-2xl">
                <figure>
                    <img className="h-[230px] w-full"
                        src={thumbnail} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title :  {title}</h2>
                    <p>Location :  {location}</p>
                    <p>Item Category :  {category}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItemsCard;