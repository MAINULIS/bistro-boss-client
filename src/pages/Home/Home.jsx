import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BistroBanner from "./BistroBanner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import MenuForm from "./MenuForm";
import SliderCard from "./SliderCard";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss / Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBanner></BistroBanner>
            <MenuForm></MenuForm>
            <SliderCard></SliderCard>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;