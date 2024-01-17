const Contact = () => {
  return (
    <div name="contact" id='cont' className="w-full h-screen flex justify-center items-center p-4">
        
        <form method='POST' action='' className="flex flex-col max-w-[600px] w-full">
            
            <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-[#F6BE3B] inline text-white">Contact</p>
            </div>

            <input className="bg-gray-200 p-2" type="name" placeholder="Name" name="name" />
            <input className="bg-gray-200 my-4 p-2" type="email" placeholder="Email" name="email" />
            <textarea className="bg-gray-200 p-2" name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button className='text-white border-2 hover:bg-[#F6BE3B] px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>

        </form>

    </div>
  )
}

export default Contact;