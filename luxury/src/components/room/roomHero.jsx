import "./roomHero.scss"
import Button from "../button/button"
import Scroll from "../Scroll/Scroll"
function RoomHero (){
    return (
        <div className="roomHero">
            <div className="container">
                <div className="roomHero__item">
                    <p className="roomHero__text">WELCOME TO</p>
                    <p className="roomHero__title">LUXURY</p>
                    <p className="roomHero__texting">HOTELS</p>
                    <p className="roomHero__description">
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                    <Button/>
                    <Scroll/>
                </div>
            </div>
        </div>
    )
}
export default RoomHero;