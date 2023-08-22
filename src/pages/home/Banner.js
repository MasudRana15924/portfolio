import React from 'react';
import img from '../../assets/banner.jpg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillHtml5,AiFillFacebook,AiFillInstagram } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { BiLogoTailwindCss } from 'react-icons/bi';
import resume from '../../assets/cv.pdf';
import Typewriter from 'typewriter-effect';
import Footer from '../../screen/shared/Footer';

const Banner = () => {
    return (
        <div  className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white" >
            <div className="lg:flex lg:justify-between mt-24 lg:mt-52">
                <div className="w-full pl-2 lg:pl-0">
                    <p className="text-start text-2xl lg:text-5xl font-bold mt-12">Junior MERN Stack Developer</p>
                    {/* <p className="text-start mt-10 text-md lg:text-xl"> Hello 👋 I'm Masud Rana, a dedicated and enthusiastic MERN stack developer on a mission to turn innovative ideas into remarkable web applications.</p> */}

                    <p className="text-start mt-4 lg:mt-10 text-md lg:text-xl">
                    <Typewriter
                        options={{
                            strings: ['Hello 👋 I,m Masud Rana, a dedicated and enthusiastic MERN stack developer on a mission to turn innovative ideas into remarkable web applications.'],
                            autoStart: true,
                            loop: true,
                           
                        }}
                    />
                    </p>
                    <div className="lg:hidden flex gap-4">
                        <a href="https://www.linkedin.com/in/masud-rana-673b3821b/" target="_blank" rel="noopener noreferrer" >
                            <BsLinkedin className="mt-4 text-xl text-blue-400"></BsLinkedin>
                        </a>
                        <a href="https://github.com/MasudRana15924" target="_blank" rel="noopener noreferrer" >
                            <BsGithub className="mt-4 text-xl text-gray-900"></BsGithub>
                        </a>
                        <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" >
                            <BsGithub className="mt-4 text-xl text-gray-900"></BsGithub>
                        </a>
                        <a href="https://web.facebook.com/masud924" target="_blank" rel="noopener noreferrer" >
                        <AiFillFacebook className="mt-4 text-xl text-blue-500"></AiFillFacebook>
                    </a>
                    <a href="https://www.instagram.com/masudrana_924/" target="_blank" rel="noopener noreferrer" >
                        <AiFillInstagram className="mt-4 text-xl text-orange-500"></AiFillInstagram>
                    </a>
                    </div>
                    <div className="w-2/4 mt-6 ">
                        <a href={resume} download>
                            <button className="resume-btn w-3/4 mr-14 ">Download Resume</button>
                        </a>
                    </div>
                </div>
                <div className="w-3/4 mx-auto lg:w-full">
                    <img src={img} alt="" className="banner-image mt-6 " />
                </div>
                <div className="hidden lg:block info-icon">
                    <a href="https://www.linkedin.com/in/masud-rana-673b3821b/" target="_blank" rel="noopener noreferrer" >
                        <BsLinkedin className="mt-4 text-xl text-blue-400"></BsLinkedin>
                    </a>
                    <a href="https://github.com/MasudRana15924" target="_blank" rel="noopener noreferrer" >
                        <BsGithub className="mt-4 text-xl text-gray-900"></BsGithub>
                    </a>
                    <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" >
                        <BsGithub className="mt-4 text-xl text-gray-900"></BsGithub>
                    </a>
                    <a href="https://web.facebook.com/masud924" target="_blank" rel="noopener noreferrer" >
                        <AiFillFacebook className="mt-4 text-xl text-blue-500"></AiFillFacebook>
                    </a>
                    <a href="https://www.instagram.com/masudrana_924/" target="_blank" rel="noopener noreferrer" >
                        <AiFillInstagram className="mt-4 text-xl text-orange-500"></AiFillInstagram>
                    </a>
                </div>
               
            </div>
            {/* <div className="flex mt-16 ml-2 lg:ml-0">
                <p className="text-start text-xl text-gray-900 font-semibold ">Skills | </p>
                <abbr title="HTML 5">  <AiFillHtml5 className=" text-red-400 lg:ml-6 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></AiFillHtml5></abbr>
                <abbr title="CSS">      <DiCss3 className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiCss3></abbr>
                <abbr title="JavaScript">      <DiJavascript1 className="text-yellow-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiJavascript1></abbr>
                <abbr title="React">      <DiReact className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiReact></abbr>
                <abbr title="Tailwind CSS">      <BiLogoTailwindCss className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></BiLogoTailwindCss></abbr>
                <abbr title="Mongo Db">       <DiMongodb className="text-green-400 h-6 w-10 mt-1 lg:mt-0 lg:h-10 lg:w-12"></DiMongodb></abbr>
                <abbr title="Nodejs">     <DiNodejsSmall className="text-green-400 h-6 w-10 mt-1 lg:mt-0 lg:h-10 lg:w-12"></DiNodejsSmall></abbr>

            </div> */}
       
        </div>
    );
};

export default Banner;