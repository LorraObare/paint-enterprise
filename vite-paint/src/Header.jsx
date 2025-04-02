import "./Styles/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from './assets/logo.png';

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
            <ul class="sidebar">
                <li><a href="#" onClick={hideSidebar}><i className="fa fa-times" aria-hidden="true"></i></a></li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <ul>
                <li className="hideOnMobile"><a href="#">HOME</a></li>
                <li className="hideOnMobile"><a href="#">ABOUT</a></li>
                <li className="hideOnMobile"><a href="#">SERVICES</a></li>
                <li className="hideOnMobile"><a href="#">PRODUCTS</a></li>
                <li className="hideOnMobile"><a href="#">PORTFOLIO</a></li>
                <li className="hideOnMobile"><a href="#">CONTACT</a></li>
                <li className="menu-button"><a href="#" onClick={showSidebar}><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
