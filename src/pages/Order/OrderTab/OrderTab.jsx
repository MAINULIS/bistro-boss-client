import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {

    // TODO: implement pagination here
    return (
        <div className="grid md:grid-cols-3 gap-5 p-4 space-y-5">
        {
             items.map(item => <FoodCard
                 key={item._id}
                 item={item}
             ></FoodCard>)
         }
        </div>
    );
};

export default OrderTab;