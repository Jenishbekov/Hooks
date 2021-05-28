import "./header.scss"
import {Link} from 'react-router-dom'
function Header(){
    return (
        <div className="header">
            <div className="container">
                <div className="header__row row">
                    <div className="header__logo">
                        <p className="header__title">LUXURY</p>
                        <p className="header__text">HOTELS</p>
                    </div>
                    <div className="header__nav">
                        <ul className="header__menu row">
                            <li className="header__list"><Link className="header__inList" to="/">Home</Link></li>
                            <li className="header__list"><Link className="header__inList" to="/facilities">Facilities</Link></li>
                            <li className="header__list"><Link className="header__inList" to="/Room">Rooms</Link></li>
                            <li className="header__list"><Link className="header__inList" to="/Contact">Contact-us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;