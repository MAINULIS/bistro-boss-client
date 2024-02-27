
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex md:space-x-4">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[105px] " src={image} alt="" />
            <div>
                <h3 className="text-gray-600 text-xl">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
           
        </div>
    );
};

export default MenuItem;