import banner from '../../assets/home/chef-service.jpg'
const BistroBanner = () => {
    return (
        <div className='relative my-14 text-center mx-auto'>
            <img className='shadow-2xl md:w-3/4 mx-auto' src={banner} alt="" />
            <div className='md:w-1/2 bg-[#FFFFFF] shadow-lg md:p-8 text-black md:-mt-20 right-80 p-4 md:absolute md:top-1/2 text-center'>
                <h4 className='text-2xl font-mono'>BISTRO BOSS</h4>
                <p className='text-enter '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.f</p>
            </div>
        </div>
    );
};

export default BistroBanner;