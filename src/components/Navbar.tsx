import { FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <div className="flex flex-row justify-between bg-red-900 p-3">
            <p>Produse</p>
            <form className="flex flex-row items-center">
                <input type="search" placeholder="Search for an item" />
                <FaSearch id="search-icon" />
            </form>
            <p>Basket</p>
        </div>
    )
}

export default Navbar;