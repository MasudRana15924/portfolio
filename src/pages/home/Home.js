import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import Courses from './Courses';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Education></Education>
          <Projects></Projects>
          <Courses></Courses>
          <Contact></Contact>
          
        </div>
    );
};

export default Home;