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
                        <p className='my-2'>
                            I am skilled in various technologies such as WordPress, React, Tailwind CSS, and Redux, 
                            demonstrating proficiency in front-end development. Additionally, I have a strong understanding of SEO 
                            and possess effective communication skills.
                        </p>
                    </div>
                </div>

        </div>

    </div>
  )
}

export default About;