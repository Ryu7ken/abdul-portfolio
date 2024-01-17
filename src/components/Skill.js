import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwindcss.png";

const Skill = () => {
  return (
    <div name="skill" id="sk" className="w-full h-screen">

      <div className="max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full h-full">

        <div>
            <p className='text-4xl font-bold border-b-4 border-[#F6BE3B] inline text-white'>Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={html} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={css} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={js} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={react} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={tailwind} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img src={redux} alt="/" className="w-20 mt-4 mx-auto"/>
            <p className="text-white my-4">Redux</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skill;