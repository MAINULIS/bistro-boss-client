import Banner from "./Banner";
import BistroBanner from "./BistroBanner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import MenuForm from "./MenuForm";
import SliderCard from "./SliderCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBanner></BistroBanner>
            <MenuForm></MenuForm>
            <SliderCard></SliderCard>
            <Featured></Featured>
        </div>
    );
};

export default Home;