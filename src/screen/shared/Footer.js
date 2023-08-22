import React from 'react';
import { BsGithub, BsLinkedin ,BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=" lg:w-3/4 lg:mx-auto mt-12 h-32">
            <div className="lg:flex justify-between">
            <p className="text-start ml-4 lg:ml-0">copyright <span className="">©</span>  design in 2021 by
                <span className="font-bold ml-2">Masud Rana </span>
            </p>
            <div className="flex gap-4 ml-4 lg:ml-0 mt-6 lg:mt-0">
                        <a href="https://www.linkedin.com/in/masud-rana-673b3821b/" target="_blank" rel="noopener noreferrer" >
                            <BsLinkedin className=" text-xl text-blue-400"></BsLinkedin>
                        </a>
                        <a href="https://github.com/MasudRana15924" target="_blank" rel="noopener noreferrer" >
                            <BsGithub className=" text-xl text-gray-900"></BsGithub>
                        </a>
                        <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" >
                            <BsGithub className="text-xl text-gray-900"></BsGithub>
                        </a>
                        <a href="https://www.instagram.com/masudrana_924/" target="_blank" rel="noopener noreferrer" >
                            <BsInstagram className="text-xl text-gray-900"></BsInstagram>
                        </a>
                    </div>
            </div>
           
        </div>
        
    );
};

export default Footer;