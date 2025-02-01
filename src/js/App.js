import '../css/App.css';
import Header from './header.js';
import Carousel from './carousel.js';
import HowWeWork from './howWeWork.js';
import OurProducts from './ourProducts.js';
import GetInTouch from './getInTouch.js';

function App() {
  return (
    <><div className="App">
      <Header />
    </div>
    <div className='bodyCarousel'>
      <Carousel />
    </div>
    <div className='howItWorks'>
      <HowWeWork />
    </div>
    <div className='ourProjects'>
      <OurProducts />
    </div>
    <div className='getInTouch'>
      <GetInTouch />
    </div>
    </>
  );
}

export default App;
