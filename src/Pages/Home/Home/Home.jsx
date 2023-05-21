import { useContext } from "react";
import UseTitle from "../../../UseTitle";
import Category from "../../Category";
import Gallery from "../../Gallery";
import About from "./About";
import Customer from "./Customer";
import Banner from "./banner/Banner";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56 "></progress>
    }
  
    UseTitle('Home')
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Customer></Customer>
            <About></About>
        </div>
    );
};

export default Home;