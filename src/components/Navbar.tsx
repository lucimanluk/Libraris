import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";

function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between px-3">
            <div className="flex flex-row items-center gap-2">
                <FaBars id="bars" />
                <p>Products</p>
            </div>
            <div className="flex flex-row items-center gap-3">
                <form className="flex flex-row items-center py-1 pl-4 pr-3 border rounded-2xl">
                    <input type="search" placeholder="Search for an item" className="bg-inherit focus:outline-none" />
                    <FaSearch id="search-icon" />
                </form>
                <img src = "./src/assets/logo2.png" className = "h-[60px] w-[60px] shadow-md rounded-md"></img>
            </div>
            <div className="flex flex-row items-center items-center gap-3">
                <div className="flex flex-row items-center gap-3">
                    <p>Sign in</p>
                    <FaSignInAlt />
                </div>
                <FaCartShopping id="cart" />
            </div>
        </div>
    )
}

export default Navbar;