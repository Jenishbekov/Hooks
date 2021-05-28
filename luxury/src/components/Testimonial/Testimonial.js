import "./Testimonial.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Review } from "../Testimonial/const"
function Testimonial(){
    return(
        <div className="Review">
            <div className="container">
                <h2 className="Review__title">Testimonials</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}>
                    
                {Review.map((item)=>{
                    return(
                        <SwiperSlide>
                            <p className="Review__text">{item.text}</p>
                            <p className="Review__author">{item.author}</p>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
                <div className="Review__end row">
                <button className="Review__destination">
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.660234 9.693L10.3532 0L13.2402 2.887L6.43423 9.693L13.2402 16.5L10.3532 19.387L0.660234 9.693Z" fill="white"/>
                    </svg>
                </button>
                <button className="Review__destination">
                    <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3398 10.6918L3.64677 20.3848L0.759766 17.4978L7.56577 10.6918L0.759766 3.88477L3.64677 0.997766L13.3398 10.6918Z" fill="white"/>
                    </svg>
                </button>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;