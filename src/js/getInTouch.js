import '../css/getInTouch.css';
import img1 from "../assets/icons/facebook.svg";
import img2 from "../assets/icons/instagram.svg";
import img3 from "../assets/icons/youtube.png";
import img4 from "../assets/icons/whatsappa.png";


const phoneNumber = "+919000547537"; // Replace with your WhatsApp number
const message = encodeURIComponent("Hello! I'm interested in your services.");
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

function GetInTouch() {
    return (
        <>
            <div className="getInTouch-sec">
                <p className='heading'>Get <span>In Touch</span></p>
                <p className='sub'>For the finest <span className='bold text-capitalize font-italic'>residential interior design</span> experience in Hyderabad, look no further!</p>
                <div className='get-mid-sec'>
                    <div className='text-area'>
                        <p><span>Cozy Interio</span> is an emerging force in interior design, bringing creativity and innovation to every space. Although we’re just getting started, our passion for design, attention to detail, and commitment to excellence set us apart. With a dedicated in-house team and skilled craftsmen, we are ready to transform spaces into extraordinary experiences. Stay tuned — your dream interior could be our next masterpiece!</p>
                        <p className='numb'>
                            <span className='whatsApp'><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><img src={img4} alt='img4' /></a></span>
                            <span className='call'>Call us: <span className='num'><a href="tel:+91 9000547537">+91 9000547537</a></span></span>
                        </p>
                    </div>
                    <div className='touch-sec'>
                        <form>
                            <label>Full Name:
                                <input placeholder='Full Name' type="text" />
                            </label>
                            <label>Mobile Number:
                                <input placeholder='Mobile Number' type="text" />
                            </label>
                            <label>Email ID:
                                <input placeholder='Email ID' type="text" />
                            </label>
                            <label>Property Type:
                                <select>
                                    <option value='0' selected disabled>Choose Property Type</option>
                                    <option value='2BHK'>2 BHK</option>
                                    <option value='2HBHK'>2.5 BHK</option>
                                    <option value='3BHK'>3 BHK</option>
                                    <option value='4BHK'>4 BHK and Above</option>
                                    <option value='villa'>Villas</option>
                                    <option value='other'>Other</option>
                                </select>
                            </label>
                            <label>Budget: 
                                <select>
                                    <option value='' selected disabled>Choose Budget</option>
                                    <option value='8to12'>8-12 Lacs</option>
                                    <option value='12to18'>12-18 Lacs</option>
                                    <option value='18to22'>18-22 Lacs</option>
                                    <option value='22more'>more than 22 lac</option>
                                </select>
                            </label>
                            <button className='custBtn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='media-links'>
                <p>
                    <span>Follow Us:</span>
                    <span> <a href='#/'> <img src={img1} alt={img1}/> </a></span>
                    <span> <a href='#/'> <img src={img2} alt={img2}/> </a></span>
                    <span> <a href='#/'> <img src={img3} alt={img3}/> </a></span>
                </p>
            </div>
        </>
    )
}

export default GetInTouch;