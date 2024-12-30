import Banner from "../components/Banner";
import PageTitle from "../components/PageTitle";

const Home = () => {
    return (
        <div
        style={{
            minHeight: "calc(100vh - 64px)",
        }}>
            <PageTitle title="Home | Track n Trace"></PageTitle>
            <section>
                <Banner></Banner>
            </section>
        </div>
    );
};

export default Home;