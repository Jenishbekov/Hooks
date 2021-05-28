import "./place.scss"

import {PlaceList} from "../place/conts"
function Place(){
    return(
        <div className="place">
            <div className="container">
                <p className="place__title">All our room types are including complementary breakfast</p>
                <div className="row place__main--row">
                    {PlaceList.map(item => {
                        return (
                            <div className="place__base row">
                                <div className="col-6 place__row">
                                   <div className="place__line ">
                                    <h4 className="place__suptitle">{item.title}</h4>
                                    <p className="place__text">{item.description}</p>
                                    <button className="place__button">Explore</button>
                                   </div>
                                </div>
                                <div className="col-6">
                                    <img  src={item.img} className="place__img"/>
                                    <img src={item.imgBeach} className="place__img2"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Place;