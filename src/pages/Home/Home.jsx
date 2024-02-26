import Banner from "./Banner";
import BistroBanner from "./BistroBanner";
import Category from "./Category";
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
        </div>
    );
};

export default Home;