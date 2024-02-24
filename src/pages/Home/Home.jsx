import Banner from "./Banner";
import BistroBanner from "./BistroBanner";
import Category from "./Category";
import MenuForm from "./MenuForm";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBanner></BistroBanner>
            <MenuForm></MenuForm>
        </div>
    );
};

export default Home;