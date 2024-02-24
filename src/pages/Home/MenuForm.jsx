import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const MenuForm = () => {
const [menu, setMenu] = useState([]);
    useEffect( () =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data =>{
            const popularMenu = data.filter(item => item.category === "popular");
            setMenu(popularMenu)
        })
    }, [])
    return (
        <section className="mt-24">
            <SectionTitle
            SubHeading={"Check it out"}
            Heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 md:w-3/4 mx-auto gap-5 my-8">
                {
                    menu.map(item => <MenuItem
                    key = {item._id}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default MenuForm;