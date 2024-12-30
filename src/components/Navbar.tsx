import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className="shadow-md relative">
            <div className="flex flex-row items-center justify-evenly py-3 px-3">
                <div className="flex flex-row items-center gap-2">
                    <FaBars id="bars" />
                    <p className="font-medium">PRODUCTS</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <form className="flex flex-row items-center py-1 pl-4 pr-3 border rounded-2xl">
                        <input type="search" placeholder="Search for an item" className="bg-inherit focus:outline-none" />
                        <FaSearch id="search-icon" />
                    </form>
                    <Link to="/"><img src="./src/assets/logo2.png" className="h-[80px] w-[80px] shadow-md rounded-md hover:shadow-black absolute top-0"></img></Link>
                </div>
                <div className="flex flex-row items-center items-center gap-6">
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-medium">SIGN IN</p>
                        <FaSignInAlt />
                    </div>
                    <FaCartShopping id="cart" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;