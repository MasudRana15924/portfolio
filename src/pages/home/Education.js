import React from 'react';
import diu from '../../assets/diu.png';
import college from '../../assets/college.png';
import school from '../../assets/school.png';
const Education = () => {
    return (
        <div className="lg:w-3/4 mx-auto mt-24 lg:mt-36 " id="education">
              <p className="text-start text-gray-900 text-xl lg:text-3xl ml-4 lg:ml-0 font-semibold">Education</p>
            <section class="timeline-section ">
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2023</div>
                        <div class="timeline-content">
                            <h3>Bachelor in CSE</h3>
                            <div className="flex lg:ml-40">
                            <img src={diu} alt="" className="h-12 w-12"/>
                           <p className="text-start mt-4 ml-2">Daffodil International University</p>
                           </div>
                         
                            <p className="mt-2">Birulia,Ashulia,Savar,Dhaka</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2015</div>
                        <div class="timeline-content">
                            <h3 className="text-start">HSC in Science </h3>
                            <div className="flex ">
                            <img src={college} alt="" className="h-12 w-10 rounded-lg"/>
                           <p className="text-start mt-4 ml-2">Syed Nazrul Islam College , Mymensingh</p>
                           </div>
                            <p className="text-start lg:ml-2">Town Hall Mor, Mymensingh </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2013</div>
                        <div class="timeline-content">
                            <h3>SSC in Science </h3>
                            <div className="flex lg:ml-36">
                            <img src={school} alt="" className="h-12 w-12 border rounded-full"/>
                           <p className="text-start mt-4 ml-2">Nabarun Public School </p>
                           </div>
                            <p>Sherpur Sadar</p>
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Education;