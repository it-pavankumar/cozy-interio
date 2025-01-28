import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="first img" style={{ width: "100%", height: "auto" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="second img" style={{ width: "100%", height: "auto" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="third img" style={{ width: "100%", height: "auto" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} alt="fourth img" style={{ width: "100%", height: "auto" }} />
        <Carousel.Caption>
          <h3>fourth slide label</h3>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
