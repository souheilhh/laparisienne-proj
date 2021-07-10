import './Footer.css';

const Footer = () => {
    return ( 
        <>
            <div id="menu" class="menu">
                <div id="menu-bar" onclick="onClickMenu()">
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                    <ul id="nav" class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>

            </div>
        </>
     );
}
 
export default Footer;