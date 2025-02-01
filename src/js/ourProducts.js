import '../css/ourProducts.css';
import soon from "../assets/soon.png";


function OurProducts() {
    return (
        <>
            <div className="ourProducts-sec">
                    <div className='mid-sec'>
                        <p className='heading'>Search <span>Our Products</span></p>
                        <p>We’re just getting started, but big things are coming! As we grow, this space will showcase our most exciting projects, creative solutions, and success stories. Stay tuned—your project could be the next one featured here!</p>
                        <img src={soon} alt={soon} />
                    </div>
            </div>
        </>
    )
}

export default OurProducts;