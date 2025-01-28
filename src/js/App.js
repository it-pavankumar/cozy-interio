import '../css/App.css';
import Header from './header.js';
import Carousel from './carousel.js';
import HowWeWork from './howWeWork.js';

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
    </>
  );
}

export default App;
