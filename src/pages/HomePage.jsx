import Footer from "../components/Footer";
import Carousel from "../components/PopularCarousel";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";

export default function HomePage(){
    return(
        <div>
            <Layout>
                <SearchPage />
                <Carousel />
                <Footer />
            </Layout>
        </div>
    );
}