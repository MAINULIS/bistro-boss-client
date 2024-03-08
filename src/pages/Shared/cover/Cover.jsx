import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15}}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content bg-gradient-to-r from-[#151515] to-[#151515] p-4 opacity-70 w-3/4 h-96 mt-16 ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-white font-serif ">{title}</h1>
                        <p className="mb-5 uppercase text-white font-serif">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;