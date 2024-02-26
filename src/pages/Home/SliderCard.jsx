import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardInfo from "./CardInfo";


const SliderCard = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const filterCard = data.filter(item => item.category === "salad");
                setCard(filterCard);
            })
    }, [])
    return (
        <section className='md:w-3/4 my-24 mx-auto'>
            <SectionTitle
                SubHeading={"Should Try"}
                Heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 space-x-4 space-y-5">
                {
                    card.slice(0, 6).map(item => <CardInfo
                    key={item._id}
                    item = {item}
                    ></CardInfo> )
                }

            </div>


        </section>
    );
};

export default SliderCard;