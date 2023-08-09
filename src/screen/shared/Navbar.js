import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from "react-icons/rx";
import { HashLink } from 'react-router-hash-link';
import { Nav, } from 'react-bootstrap';
const Navbar = () => {

    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div >
            <header className="absolute inset-x-0 top-0 z-50 lg:pl-2 lg:pr-2 lg:w-full lg:mx-auto  lg:mr-12 mt-6">
                <nav className="flex items-center justify-between pr-3 lg:py-4 lg:pr-0" aria-label="Global">
                    <div className="flex lg:flex-1 ">

                        <Link to="/">
                            <p className="text-xl font-bold leading-6 text-gray-900 ml-4 lg:ml-32">MasudRana.dev</p>

                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={showMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FiMenu className="lg:hidden block h-6 w-8 cursor-pointer mr-3 "
                            />
                        </button>
                    </div>
                    <div class="hidden lg:ml-16 lg:flex lg:gap-x-6 2xl:gap-x-12">

                        {/* {navigation.map((item) => (
                            <Link key={item.name} as={HashLink}  to={`/home#${item.to}`} className="text-xl font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))} */}
                        <Nav.Link as={HashLink} to="/home#home" className="text-xl font-semibold leading-6 text-gray-900">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home" className="text-xl font-semibold leading-6 text-gray-900">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className="text-xl font-semibold leading-6 text-gray-900">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#pojects" className="text-xl font-semibold leading-6 text-gray-900">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#education" className="text-xl font-semibold leading-6 text-gray-900">Education</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#courses" className="text-xl font-semibold leading-6 text-gray-900">Courses</Nav.Link>

                    </div>

                </nav>
                {/* for small devices */}
                <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 left:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start  ml-16' : 'hidden'}>
                    <div className="flex justify-between">
                        <RxCross1 className="text-xl ml-5  mt-6 text-black" onClick={showMenu}></RxCross1>

                    </div>
                    <ul>
                        <li>
                            {/* <Link to="/" className=" text-sm  text-gray-900 px-5    block " onClick={showMenu}>Home</Link> */}
                            <Nav.Link as={HashLink} to="/home#home" className=" text-sm  text-gray-900 px-5    block " onClick={showMenu}>Home</Nav.Link>
                        </li>
                        <li>
                            {/* <Link to="/" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>
                                About
                            </Link> */}
                            <Nav.Link as={HashLink} to="/home#home" className="text-sm text-gray-900 px-5 py-2   block " onClick={showMenu}>About</Nav.Link>
                        </li>

                        <li>
                            {/* <Link to="/contact" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Contact</Link> */}
                            <Nav.Link as={HashLink} to="/home#contact" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Contact</Nav.Link>
                        </li>
                        <li>
                            {/* <Link to="/projects" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Projects</Link> */}
                            <Nav.Link as={HashLink} to="/home#pojects" className="text-sm  text-gray-900 px-5 py-2   block " >Projects</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={HashLink} to="/home#education" className="text-sm  text-gray-900 px-5 py-2   block " >Education</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={HashLink} to="/home#courses" className="text-sm  text-gray-900 px-5 py-2   block " >Courses</Nav.Link>
                        </li>
                    </ul>
                </ul>

            </header>
        </div>
    );
};

export default Navbar;