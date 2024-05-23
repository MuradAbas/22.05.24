import { NavLink } from "react-router-dom";
import "./index.scss";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";




const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">header
        <h3 className="closhop">CLOSHOP</h3>
        
        
        <nav>
          
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Shop</NavLink>
            </li>
            <li>
              <NavLink>PROMOTION</NavLink>
            </li>
            <li>
              <NavLink>PAGES</NavLink>
            </li>
            <li>
              <NavLink>BLOG</NavLink>
            </li>
            <li>
              <NavLink>CONTACT</NavLink>
            </li>
          </ul>
        </nav>
        <div className="icons">

        <CiSearch />

        <FaUser />
        <FaShoppingCart />
        </div>
       </div>
      </div>
    </header>
  );
};

export default Header;
