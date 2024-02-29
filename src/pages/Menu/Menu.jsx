import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const offered = menu.filter(item => item.category === "offered");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss / Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"} description={"would you like to try a dish ?"}></Cover>
            {/* main cover */}

            <SectionTitle  SubHeading={"Don't Miss"} Heading={"Today's offered"}></SectionTitle>
            {/* offered menu items */}

            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            itemImg={dessertImg}
            items={desserts}
            title={"desserts"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory
            itemImg={pizzaImg}
            items={pizza}
            title={"pizzas"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/* Salads menu item */}
            <MenuCategory
            itemImg={saladImg}
            items={salad}
            title={"salads"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/*soups menu item */}
            <MenuCategory
            itemImg={soupImg}
            items={soup}
            title={"soups"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
        </div>
    );
};

export default Menu;