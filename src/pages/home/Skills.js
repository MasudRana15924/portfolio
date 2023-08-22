import React from 'react';
import { motion } from "framer-motion"
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { BiLogoTailwindCss } from 'react-icons/bi';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="lg:w-full flex items-center justify-center  font-semibold  text-light  shadow-dark" whileHover={{ scale: 1.05 }}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        >
            <p className="bg-black text-white rounded-full flex items-center justify-center  font-semibold  text-light  shadow-dark cursor-pointer absolute px-2  lg:px-6  lg:py-3 mb-20">{name}</p>
        </motion.div>
    )
}
const Skills = () => {
    return (
        <div className="mt-24 lg:mt-44 lg:w-3/4 mx-auto mb-20 ">
           <p className=" ml-2 lg:ml-0 text-start lg:text-center text-mx  lg:font-semibold lg:text-xl">As a MERN Stack Developer these are my skills </p>
            <motion.div className="hidden mt-48 lg:mt-64 2xl:mt-72 lg:flex items-center justify-center  font-semibold  text-light  shadow-dark  " whileHover={{ scale: 1.05 }}>
                <p className="bg-black text-white lg:p-8 rounded-full flex items-center justify-center  font-semibold  text-light  shadow-dark cursor-pointer">Web</p>
            </motion.div>
            {/* <skill name="css" x="-5vw" y="-10vw"></skill> */}
            <div className="hidden lg:block">
           <Skill name="HTML" x="-20vw" y="8vw">CSS</Skill>
            <Skill name="css" x="-12vw" y="-10vw">CSS</Skill>
            <Skill name="Javascript" x="20vw" y="8vw">CSS</Skill>
            <Skill name="ReactJs" x="1vw" y="17vw">CSS</Skill>
            <Skill name="Redux Toolkit" x="-14vw" y="15vw">CSS</Skill>
            <Skill name="NextJs" x="-20vw" y="-2vw">CSS</Skill>
            <Skill name="Nodejs" x="12vw" y="-10vw">CSS</Skill>
            <Skill name="Mongodb" x="20vw" y="-2vw">CSS</Skill>
            <Skill name="Express" x="0vw" y="-15vw">CSS</Skill>
            <Skill name="Tailwind CSS" x="16vw" y="15vw" >CSS</Skill>
           </div>
           <div className="lg:hidden ">
           <div className="flex mt-16 ml-2 lg:ml-0">
                <p className="text-start text-xl text-gray-900 font-semibold ">Skills | </p>
                <abbr title="HTML 5">  <AiFillHtml5 className=" text-red-400 lg:ml-6 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></AiFillHtml5></abbr>
                <abbr title="CSS">      <DiCss3 className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiCss3></abbr>
                <abbr title="JavaScript">      <DiJavascript1 className="text-yellow-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiJavascript1></abbr>
                <abbr title="React">      <DiReact className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></DiReact></abbr>
                <abbr title="Tailwind CSS">      <BiLogoTailwindCss className="text-blue-400 mt-1 lg:mt-0 h-6 w-10  lg:h-10 lg:w-12"></BiLogoTailwindCss></abbr>
                <abbr title="Mongo Db">       <DiMongodb className="text-green-400 h-6 w-10 mt-1 lg:mt-0 lg:h-10 lg:w-12"></DiMongodb></abbr>
                <abbr title="Nodejs">     <DiNodejsSmall className="text-green-400 h-6 w-10 mt-1 lg:mt-0 lg:h-10 lg:w-12"></DiNodejsSmall></abbr>

            </div>
           </div>
        </div>
    );
};

export default Skills;