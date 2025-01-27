import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router";
import { SignInButton } from '@clerk/clerk-react';
import logo from "../assets/logo2.png";



function Navbar() {
    const [isVisible, setVisible] = useState(false);
    const arr = ['All products', 'BOOK', 'PENS', 'NOTEBOOKS', 'FIGURINE'];

    function handleClick() {
        setVisible(!isVisible);
    }

    return (
        <div className="shadow-md relative">
            <div className="flex flex-row items-center justify-evenly py-3 px-3 relative">
                <div className="flex flex-row items-center gap-2 relative" onClick={handleClick}>
                    <FaBars id="bars" />
                    <p className="font-medium">PRODUCTS</p>
                    {
                        isVisible ? <div className="py-2 px-6 absolute top-[41px] z-10 border-2 bg-slate-50 w-[140px]">
                            <ul>
                                <Link to={`/items/type/${arr[0]}`}><li className="font-medium">All products</li></Link>
                                <Link to={`/items/type/${arr[1]}`}><li> Books</li></Link>
                                <Link to={`/items/type/${arr[2]}`}><li>Pens</li></Link>
                                <Link to={`/items/type/${arr[3]}`}><li>Notebooks</li></Link>
                                <Link to={`/items/type/${arr[4]}`}><li>Figurines</li></Link>
                            </ul>
                        </div> : null
                    }
                </div>
                <div className="flex flex-row items-center gap-3">
                    <form className="flex flex-row items-center py-1 pl-4 pr-3 border rounded-2xl">
                        <input type="search" placeholder="Search for an item" className="bg-inherit focus:outline-none" />
                        <FaSearch id="search-icon" />
                    </form>
                    <Link to="/"><img src={logo} className="h-[80px] w-[80px] shadow-md rounded-md hover:shadow-black absolute top-0"></img></Link>
                </div>
                <div className="flex flex-row items-center items-center gap-6">
                    <SignInButton>
                        <button className="flex flex-row items-center gap-2">
                            <p className="font-medium">SIGN IN</p>
                            <FaSignInAlt />
                        </button>
                    </SignInButton>
                    <FaCartShopping id="cart" />
                </div>
            </div>
        </div >
    )
}

export default Navbar;