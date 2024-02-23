
const SectionTitle = ({Heading, SubHeading}) => {
    return (
        <div className="text-center my-10 md:w-4/12 mx-auto">
            <p className="text-yellow-500 mb-2 italic">---{SubHeading}---</p> 
            <h3 className="text-3xl text-black border-y-4 py-2 uppercase ">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;