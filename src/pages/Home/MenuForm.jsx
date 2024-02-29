import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const MenuForm = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="my-24">
            <SectionTitle
                SubHeading={"Check it out"}
                Heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 md:w-3/4 mx-auto gap-5 my-8">

                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="text-center">
                <button className="btn btn-outline text-black border-0 border-b-4 uppercase text-xl font-semibold mt-3">view full menu</button>
            </div>
        </section>
    );
};

export default MenuForm;