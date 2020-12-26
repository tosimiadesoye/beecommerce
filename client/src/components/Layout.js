import Footer from "./Footer";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CardContainer from "./CardContainer";

const items = [
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
  { image: "/images/nailPolish.jpg", name: "lipLiner", price: 20 },
  { image: "/images/eyeshadow.jpg", name: "eyeshadow", price: 20 },
  { image: "/images/lipstick.jpg", name: "lipstick", price: 20 },
];

const latest = [
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
];
const Layout = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className=" ml-3 row-span-2">
          <img
            // style={{ height: "100%", width: "70rem" }}
            className="h-80 w-5/6 "
            src="/images/blush.jpg"
            alt="display"
          />
        </div>
        <div className="col-span-1">
          <img
            className="h-40 "
            // style={{ height: "100%", width: "20rem" }}
            src="/images/eyebrow.jpg"
            alt="Third slide"
          />
        </div>
        <div className="col-span-2 ">
          <img
            className="h-40 "
            // style={{ height: "100%", width: "20rem" }}
            src="/images/nailPolish.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <div className="grid justify-items-stretch m-5">
        <h3 className="justify-self-center uppercase mb-5">Upcoming Collection</h3>
        <div>
          <CardContainer info={ items}/>
          <Link to='/shop' className="justify-self-center uppercase center">shop all items</Link>
        </div>
      </div>
      <div>
      <div className="">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              style={{ height: "20rem" }}
              src='/images/eyeliner.jpg'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              style={{ height: "20rem" }}
              src='/images/eyeliner.jpg'
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "20rem" }}
              src='/images/eyeliner.jpg'
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
</div>
      <div className="grid justify-items-stretch m-5">
        <h3 className="justify-self-center uppercase mb-5">Upcoming Collection</h3>
        <div>
          <CardContainer info={ latest}/>
          <Link to='/shop' className="justify-self-center uppercase center">shop all items</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
