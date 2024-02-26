import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed p-10 my-12 text-white">
            <SectionTitle
            SubHeading={"Check it out"}
            Heading={"Featured Items"}
            ></SectionTitle>
            <div className="md:flex items-center justify-center gap-8 md:w-3/4 mx-auto pb-10 pt-5 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="bg-gradient-to-r from-[#151515] to-[#6666] p-4 opacity-80">
                    <p> 20 Aug, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos pariatur labore non veritatis. Magnam qui mollitia dolorem modi, cupiditate at sapiente dolorum quo recusandae labore! Necessitatibus corporis excepturi minus quis! Ratione doloribus odit alias aspernatur laborum possimus, ea atque accusantium praesentium, doloremque sunt labore nostrum!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white text-xl font-semibold mt-3">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;