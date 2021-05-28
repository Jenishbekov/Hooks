import Button from "../button/button"
import Scroll from "../Scroll/Scroll"
import "./condition.scss"
function Condition (){
    return(
        <div className="condition">
            <div className="container">
                <div className="condition__item">
                    <p className="condition__text">WELCOME TO</p>
                    <p className="condition__title">LUXURY</p>
                    <p className="condition__texting">HOTELS</p>
                    <p className="condition__description">
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>
                <Button/>
                <Scroll/>
            </div>
        </div>
    )
}
export default Condition;