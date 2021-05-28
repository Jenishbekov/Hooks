import "./lastPart.scss"
function LastPart(){
    return(
        <div className="lastPart">
            <div className="container">
                <h3 className="lastPart__title">WE ARE HERE FOR YOU</h3>
                <p className="lastPart__text">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
                    please forward it to our support desk and we will get back to you as soon as possible.
                </p>
                <div className="lastPart__end row">
                    <div className="lastPart__adress">
                            <p className="lastPart__destinations">497 Evergreen Rd. Roseville, CA 95673</p>
                        <div className="lastPart__view row" >
                            <p className="lastPart__map">View map</p>
                            <svg width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A"/>
                            </svg>
                        </div>
                            <p className="lastPart__email">Phone: +44 345 678 903 Email: luxury_hotels@gmail.com</p>
                        </div>
                    <div className="lastPart__writeInformation">
                            <div className="lastPart__name row">
                                <label for="Fname" className="lastPart__form">Name</label>
                                <input type="text" className="lastPart__input"/>
                            </div>
                            <div className="lastPart__emailAdress row">
                                <label for="Fname" className="lastPart__form">Email Adress</label>
                                <input type="text" className="lastPart__input"/>
                            </div>
                            <div className="lastPart__message row">
                                <label for="Fname" className="lastPart__form">Message</label>
                                <input type="text" className="lastPart__messageInput"/>
                            </div>
                            <button className="lastPart__button">Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default LastPart;