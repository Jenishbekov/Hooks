import "./modern.scss"
import Testimonial from "../Testimonial/Testimonial"
import {ModernList} from "../modern/const"
function Modern(){
    return(
        <div className="modern">
            <div className="container">
                <h3 className="modern__title">FACILITIES</h3>
                <p className="modern__text">
                    We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
                    that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                    and our modern luxury resort facilities will help you enjoy the best of all. 
                </p>
                <div className="row modern-row">
                    {ModernList.map(list=>{
                        return(
                            <div className="modern__menu">
                                <div className="modern__images">
                                    <img src={list.img}/>
                                <button className="modern__shortText">
                                    <p className="modern__texting">{list.description}</p>
                                </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Testimonial/>
            </div>
        </div>
    )
}
export default  Modern