import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
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
            <section>
                <FAQ></FAQ>
            </section>
        </div>
    );
};

export default Home;