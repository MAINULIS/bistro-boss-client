import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem";
import Cover from "../../Shared/cover/Cover";

const MenuCategory = ({ items, itemImg, title, description }) => {

    return (
        <div>
           {title &&  <Cover img={itemImg} title={title} description={description}></Cover>}

            <div className="grid md:grid-cols-2 md:w-3/4 mx-auto gap-5 my-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="text-center mb-20">
                <Link to={`/order/${title}`}><button className="btn btn-outline text-black border-0 border-b-4 uppercase text-xl font-semibold">Order your favorite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;