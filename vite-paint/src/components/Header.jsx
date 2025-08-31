import "../Styles/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../assets/logo.png';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"; // Add this import
import { FaHome } from "react-icons/fa";

function Header () {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display ='flex'
    }
    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display ='none'
    }
    return (
        <header>
            <div className="logo">
            <img src={logo} alt="Gemasu Logo" />
            </div>
            <nav>
<ul className="sidebar">
            <li>
        <a href="#" onClick={hideSidebar}>
            <i className="fa fa-times" aria-hidden="true"></i>
        </a>
            </li>
            <li>
        <HashLink smooth to="/#home">
        <FaHome style={{ marginRight: "6px", verticalAlign: "middle" }} />
         HOME
        </HashLink>
            </li>
            <li>
            <HashLink smooth to="/#about" onClick={hideSidebar}>About Us</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#services" onClick={hideSidebar}>Our Services</HashLink>
            </li>
            <li>
            <Link to="/products" onClick={hideSidebar}>Products</Link>
            </li>
            <li>
            <Link to="/gallery" onClick={hideSidebar}>Gallery</Link>
            </li>
            <li>
            <Link to="/contact" onClick={hideSidebar}>Contact Us</Link>
            </li>
</ul>

<ul>
        <li className="hideOnMobile">
        <HashLink smooth to="/#home" onClick={hideSidebar}>
        <FaHome style={{ marginRight: "6px", verticalAlign: "middle" }} />
        HOME
        </HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#about">ABOUT US</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#services">OUR SERVICES</HashLink>
        </li>
        <li className="hideOnMobile">
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li className="menu-button">
          <a href="#" onClick={showSidebar}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
         </li>
</ul>
            </nav>
        </header>
    );
}
export default Header;