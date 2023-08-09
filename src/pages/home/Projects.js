import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import video from '../../assets/health.mp4';
import videoOne from '../../assets/fintech.mp4';
import { BsGithub} from 'react-icons/bs';
import { MdPreview } from 'react-icons/md';
const Projects = () => {
    return (
        <div id="pojects" className="lg:w-3/4 lg:mx-auto border border-white" >
            <p className="text-start text-gray-900 text-xl lg:text-3xl mb-5 ml-4 lg:ml-0 font-semibold mt-24 lg:mt-36">My Projects</p>
            <p className="text-start text-md text-gray-900 mb-10 font-semibold ml-4 lg:ml-0">Each project has backend service</p>
            <div className="lg:flex ">
                <div className="w-full mx-auto lg:w-full border rounded-lg">
                    <HoverVideoPlayer
                        videoSrc={video}
                        // Playback should start 2.5 seconds into the video
                        playbackRangeStart={2.5}
                        className=""
                    />
                </div>
                <div className="lg:w-full ml-2 lg:ml-6 mt-5 lg:mt-0">
                    <p className="text-start text-xl text-gray-900  font-semibold">Health Bridge</p>
                    <p className="text-start  mt-4">A Online Doctor consultation website where user can take video or hospital consultations and get there prescription. User can order medicine from home also find emergency blood and finally booked ambulance.</p>
                    <div className="lg:flex gap-4 mt-3 lg:mt-8">
                        <div className="flex gap-4">
                            <p>Client Site Code</p>
                            <a href="https://github.com/MasudRana15924/health-bridge" target="_blank" rel="noopener noreferrer" >
                                <BsGithub className=" text-xl text-gray-900"></BsGithub>
                            </a>
                        </div>
                        <div className="flex gap-4 mt-2 lg:mt-0">
                            <p>Server Site Code</p>
                            <a href="https://github.com/MasudRana15924/health-bridge" target="_blank" rel="noopener noreferrer" >
                                <BsGithub className=" text-xl text-gray-900"></BsGithub>
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <p>Demo</p>
                            <a href="https://health-bridge-4179.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                <MdPreview className="mt-1 text-xl text-gray-900"></MdPreview>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex mt-24">
                
                <div className="lg:w-full ml-2 ">
                    <p className="text-start text-xl text-gray-900  font-semibold">M-pay Fintech App</p>
                    <p className="text-start  mt-4">This website for transfer money  like B-kash &  Nagad App</p>
                    <div className="lg:flex gap-4 mt-3 lg:mt-8">

                        <div className="flex gap-2">
                            <p>Client Site Code</p>
                            <a href="https://github.com/MasudRana15924/fintech-frontend" target="_blank" rel="noopener noreferrer" >
                                <BsGithub className=" text-xl text-gray-900"></BsGithub>
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <p>Server Site Code is Private</p>
                            
                        </div>
                        <div className="flex gap-2">
                            <p>Demo</p>
                            <a href="https://m-pay.vercel.app/login" target="_blank" rel="noopener noreferrer" >
                                <MdPreview className="mt-1 text-xl text-gray-900"></MdPreview>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto lg:w-full mt-5 lg:mt-0 border rounded-lg">
                    <HoverVideoPlayer
                        videoSrc={videoOne}
                        // Playback should start 2.5 seconds into the video
                        playbackRangeStart={2.5}
                        className=""
                    />
                </div>
            </div>

        </div>
    );
};

export default Projects;