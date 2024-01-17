import Typed from 'react-typed';
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" id="hm" className="w-full h-screen">
                
            <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center text-white text-center ">
                <h1 className="text-xl md:text-2xl p-4 font-semibold">Hi, I am</h1>
                <Typed className="p-4 font-semibold text-[#0A192F] text-3xl md:text-4xl" strings={['Abdul Baquiur Rahman.']} typeSpeed={60} backSpeed={60} loop />
                <h1 className="p-4 mb-3 font-semibold text-3xl md:text-4xl">A <span className="text-[#0a192f]">React</span> Developer.</h1>
                <p className='pb-6 text-lg font-semibold md:text-xl'>I love to talk and explore about Frontend.</p>
                <div>
                    <Link to="about" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-5 py-3 my-2 hover:bg-[#F6BE3B]">
                            <HiArrowNarrowRight className="group-hover:rotate-90 ease-in-out duration-300" size={25}/>   
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;