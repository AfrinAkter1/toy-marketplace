import Category from "../../Category";
import Gallery from "../../Gallery";
import Customer from "./Customer";
import Banner from "./banner/Banner";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Customer></Customer>
        </div>
    );
};

export default Home;