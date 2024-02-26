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