import { Footer } from "../components/Footer";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";

export default function HomePage(){
    return(
        <div>
            <Layout>
                <SearchPage />
                <Footer />
            </Layout>
        </div>
    );
}