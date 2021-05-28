import "./anotherRooms.scss"
import {SingleRooms} from "./const"
function AnotherRooms(){
    return (
        <div className="anotherRooms">
            <div className="container">
              <h3 className="anotherRooms__title">ROOMS AND RATES</h3>
              <p className="anotherRooms__texting">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
                comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
                by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
              {SingleRooms.map((item)=>{
                  return(
                  <div className="single">
                        <img  src={item.img} className="single__img"/>
                    <div className="single__singleText">
                      <button className="single__text">{item.text}</button>
                    </div>
                    <div className="single__night row">
                        <div className="single__detail row">
                          <svg className="single__svg" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#E0B973"/>
                      <line x1="26.5" y1="11" x2="26.5" y2="41" stroke="white" stroke-width="3"/>
                      <line x1="41" y1="26.5" x2="11" y2="26.5" stroke="white" stroke-width="3"/>
                      </svg>
                          <p className="single__view">{item.view}</p>
                        </div>
                        <div className="single__avg">
                          <button className="single__button">{item.button}</button>
                        </div>
                    </div>
                  </div>
                  )
                })}
            </div>  
        </div>
    )
}
export default AnotherRooms;