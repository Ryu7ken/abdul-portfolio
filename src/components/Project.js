import foodapp from "../assets/foodilicious.jpeg";
import weatherapp from "../assets/celestaclima.jpeg";

const Project = () => {
  return (
    <div name="project" id='pro' className='w-full h-screen'>
        
        <div className='max-w-[1000px] flex flex-col justify-center p-4 mx-auto w-full h-full'>

            <div className='text-white pb-8'>
                <p className='text-4xl font-bold border-b-4 border-[#F6BE3B] inline'>Projects</p>
                <p className='py-6 sm:text-lg'>/ Check out some of my projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${foodapp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className="opacity-0 group-hover:opacity-100">
                        
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Food ordering app
                        </span>

                        <div className="pt-8 text-center">
                            <a href='https://foodilicious.vercel.app/'>
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg hover:bg-blue-700">
                                    Live</button>
                            </a>

                            <a href='https://github.com/Ryu7ken/foodilicious'>
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg hover:bg-blue-700">
                                    Code</button>
                            </a>
                        </div>

                    </div>

                </div>

                <div style={{backgroundImage: `url(${weatherapp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className="opacity-0 group-hover:opacity-100">
                        
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Weather forecast app
                        </span>

                        <div className="pt-8 text-center">
                            <a href='https://celestaclima.vercel.app/'>
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg hover:bg-blue-700">
                                    Live</button>
                            </a>

                            <a href='https://github.com/Ryu7ken/celestaclima'>
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg hover:bg-blue-700">
                                    Code</button>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Project;