import { useState } from "react";
import {FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white shadow-lg shadow-black">

            <div className="text-[#F6BE3B] font-semibold">
                <h1 className="text-xl md:text-2xl lg:text-3xl">{"< Abdul />"}</h1>
            </div>

            <div>
                <ul className="hidden md:flex">
                    <li className="h-[30px] mx-4 text-lg cursor-pointer hover:border-b-2 hover:border-[#F6BE3B]">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="h-[30px] mx-4 text-lg cursor-pointer hover:border-b-2 hover:border-[#F6BE3B]">
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="h-[30px] mx-4 text-lg cursor-pointer hover:border-b-2 hover:border-[#F6BE3B]">
                        <Link to="skill" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className="h-[30px] mx-4 text-lg cursor-pointer hover:border-b-2 hover:border-[#F6BE3B]">
                        <Link to="project" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className="h-[30px] mx-4 text-lg cursor-pointer hover:border-b-2 hover:border-[#F6BE3B]">
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="md:hidden z-10" onClick={handleClick}>
                {!showMenu ? <FaBars size={20}/> : <FaTimes size={20}/>}
            </div>

            <ul className={!showMenu ? "fixed left-[-100%] top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ease-in-out duration-500" : 
            "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ease-in-out duration-500"}>
                
                <li className="py-4 text-3xl">
                    <Link onClick={handleClick} className="cursor-pointer" to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link onClick={handleClick} className="cursor-pointer" to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link onClick={handleClick} className="cursor-pointer" to="skill" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link onClick={handleClick} className="cursor-pointer" to="project" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link onClick={handleClick} className="cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
                <li className="py-4 text-3xl">
                    <a className="flex justify-between items-center cursor-pointer" href="https://www.linkedin.com/in/abdul-rahman7/">LinkedIn <FaLinkedin className="mx-2" size={30}/></a>
                </li>
                <li className="py-4 text-3xl">
                    <a className="flex justify-between items-center cursor-pointer" href="https://github.com/Ryu7ken?tab=repositories">Github <FaGithub className="mx-2" size={30}/></a>
                
                </li>
            
            </ul>

            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-blue-500">
                        <a href="https://www.linkedin.com/in/abdul-rahman7/" className="flex justify-between w-full text-gray-300 font-semibold text-lg">
                            LinkedIn <FaLinkedin size={30}/></a>
                    </li>
                    <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a href="https://github.com/Ryu7ken?tab=repositories" className="flex justify-between w-full text-gray-300 font-semibold text-lg">
                            Github <FaGithub size={30}/></a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;