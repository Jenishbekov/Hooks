import "./hero.scss"
import Button from "../../components/button/button";
import Scroll from "../../components/Scroll/Scroll"
function Hero(){
    return(
        <div className="hero">
            <div className="container hero__menu">
                <div className="hero__item">
                    <p className="hero__text">WELCOME TO</p>
                    <p className="hero__title">LUXURY</p>
                    <p className="hero__texting">HOTELS</p>
                    <p className="hero__description">
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>
                <Button className="hero__button"/>
                <Scroll className="hero__scroll"/>
            </div>
        </div>
    )
}
export default Hero;