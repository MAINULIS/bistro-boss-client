
const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;

    return (
        <div className="card  bg-neutral-200 shadow-xl text-black">

        <img src={image} alt="image" className="w-[424px] shadow-xl" />
        <p className="absolute right-0 px-2 py-1 text-white bg-slate-900 mt-4 mr-4">${price}</p>

        <div className="card-body items-center text-center pb-4">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
                <button className="btn uppercase text-[#BB8506] bg-neutral-300  border-0 border-b-4 border-[#BB8506]">Add To Card</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;