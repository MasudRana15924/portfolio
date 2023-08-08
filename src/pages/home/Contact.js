import React from 'react';
import { AiFillPhone,AiOutlineMail} from 'react-icons/ai';
const Contact = () => {
    return (
        <div className="mt-24 lg:mt-36 lg:w-3/4 mx-auto ">
            <p className="text-start text-blue-400 text-xl lg:text-3xl ml-4 lg:ml-0">Contact Me</p>
            <div className='lg:flex justify-between'>
            <div className='w-full'>
            {/* <p className="text-start  text-md lg:text-xl  ml-4 lg:ml-0 mt-4">Masud Rana</p> */}
            <div className="flex gap-4">
            <AiFillPhone className="text-start  text-sm lg:text-xl  ml-4 lg:ml-0 mt-5"></AiFillPhone><p className="text-start  text-sm lg:text-md  ml-4 lg:ml-0 mt-4"> +8801952254063</p>
            </div>
            <div className="flex gap-4">
            <AiOutlineMail className="text-start  text-sm lg:text-xl  ml-4 lg:ml-0 mt-5"></AiOutlineMail><p className="text-start  text-sm lg:text-md  ml-4 lg:ml-0 mt-5"> masud15-924@diu.edu.bd</p>
            </div>
            </div>
            <div className='w-3/4 ml-4 lg:w-full mt-6 lg:mt-0'>
                 <form action="">
                    <input type="text" placeholder='Your Name' className="h-10 border-2 rounded-lg border-black w-full pl-6"/>
                    <input type="text" placeholder='Your Email' className="h-10 border-2 rounded-lg border-black w-full pl-6 mt-4"/>
                    <input type="text" placeholder='Your Message' className="h-20 border-2 rounded-lg border-black w-full pl-6 mt-4"/>
                    <button className="text-white text-xl font-bold h-10 bg-black border-2 rounded-lg border-black w-full mt-4">Send </button>
                 </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;