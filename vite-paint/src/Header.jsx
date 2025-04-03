import "./Styles/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from './assets/logo.png';
import { HashLink } from "react-router-hash-link";

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
            <HashLink smooth to="/#home" onClick={hideSidebar}>Home</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#about" onClick={hideSidebar}>About</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#services" onClick={hideSidebar}>Services</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#products" onClick={hideSidebar}>Products</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#portfolio" onClick={hideSidebar}>Portfolio</HashLink>
            </li>
            <li>
            <HashLink smooth to="/#contact" onClick={hideSidebar}>Contact</HashLink>
            </li>
</ul>

<ul>
        <li className="hideOnMobile">
          <HashLink smooth to="/#home">HOME</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#about">ABOUT</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#services">SERVICES</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#products">PRODUCTS</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#portfolio">PORTFOLIO</HashLink>
        </li>
        <li className="hideOnMobile">
          <HashLink smooth to="/#contact">CONTACT</HashLink>
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
