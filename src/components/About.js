import React from 'react'

const About = () => {
  return (
    <div name="about" id="abt" className="h-screen w-full">

        <div className="flex flex-col justify-center items-center w-full h-full">

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold border-b-4 border-[#F6BE3B] inline text-white'>About</p>
                </div>
                <div></div>

            </div>

                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 text-[#0a192f]'>
                    <div className="sm:text-right text-4xl font-bold">
                        <p>
                            I am a recent graduate from Techno Main Salt Lake with a Bachelor of Computer Application. 
                        </p>  
                    </div>

                    <div className='text-black text-lg'>
                        <p className='mb-5'>
                            My areas of expertise lie in React, with a focus on creating responsive and efficient user interfaces. 
                            I have practical experience in implementing UI components, managing state with Redux, utilizing Tailwind CSS for 
                            streamlined styling, and conducting unit and integration testing with Jest.
                        </p>
                    </div>
                </div>

        </div>

    </div>
  )
}

export default About;