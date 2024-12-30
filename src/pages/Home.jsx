import Banner from "../components/Banner";
import PageTitle from "../components/PageTitle";

const Home = () => {
    return (
        <div className="min-h-screen">
            <PageTitle title="Home | Track n Trace"></PageTitle>
            <section>
                <Banner></Banner>
            </section>
        </div>
    );
};

export default Home;