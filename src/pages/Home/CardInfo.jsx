

const CardInfo = ({ item }) => {
    const {name, image, recipe} = item;
    return (
        <div className="card  bg-neutral-200 shadow-xl text-black">
           
        <img  src={image} alt="Shoes" className="w-[424px] shadow-xl" />
   
    <div className="card-body items-center text-center pb-4">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
            <button className="btn uppercase text-[#BB8506] bg-neutral-600">Add To Card</button>
        </div>
    </div>
</div>
    );
};

export default CardInfo;