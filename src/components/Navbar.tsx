import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
    return (
        <div className="flex flex-row justify-between bg-slate-100 p-3 items-center">
            <div className="flex flex-row items-center gap-2 hover:bg-slate-200">
                <FaBars id="bars"/>
                <p>Products</p>
            </div>
            <form className="flex flex-row items-center py-1 pl-4 pr-3 bg-slate-200 border rounded-2xl">
                <input type="search" placeholder="Search for an item" className="bg-inherit focus:outline-none" />
                <FaSearch id="search-icon" />
            </form>
            <div>
                <FaCartShopping id = "cart"/>
            </div>
        </div>
    )
}

export default Navbar;