import "./layout.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import blush from "../images/makeup-images/blush.jpg";
import bronzer from "../images/makeup-images/bronzer.jpg";
import lipLiner from "../images/makeup-images/lipLiner.jpg";
import eyeliner from "../images/makeup-images/eyeliner.jpg";
import eyeshadow from "../images/makeup-images/eyeshadow.jpg";
import eyebrow from "../images/makeup-images/eyebrow.jpg";
import nailPolish from "../images/makeup-images/nailPolish.jpg";
import lipstick from "../images/makeup-images/lipstick.jpg";
import image1 from "../images/makeup-images/1st-image.jpg";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
const Layout = () => {
  return (
    <div className="layout">
      <main className="main">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              style={{ height: "20rem" }}
              src={image1}
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
              src={image1}
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
              src={image1}
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
      </main>

      <div id="content" >
        <Card>
          <Card.Img
            variant="top"
            style={{ width: "11rem" }}
            src={eyeshadow}
            alt="shop eyeshadow"
          />
          <Card.Body>
            <Button variant='dark' as={Link} to="/type/eyeshadow">
              eyeshadow
            </Button>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Img
            variant="top"
            style={{ width: "11rem" }}
            src={lipstick}
            alt="shop lipstick"
          />
          <Card.Body>
            <Button variant='dark' as={Link} to="/type/lipstick">
            Lipstick
            </Button>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Img
            variant="top"
            style={{ width: "11rem" }}
            src={nailPolish}
            alt="shop nail polish"
          />
          <Card.Body>
            <Button variant='dark' as={Link} to="/type/nail_polish">
            Nail polish
            </Button>
          </Card.Body>
        </Card>
        <br />

        {/* 
        <Link to="/type/mascara">mascara</Link>
      */}
        {/* 
        <Link to="/type/foundation">foundation</Link> */}
      </div>
      <div id="content1">
        <CardGroup>
          <Card >
            <Card.Img
              variant="top"
              style={{ width: "15rem" }}
              src={blush}
              alt="shop blush"
            />
            <Card.Body>
              <Button variant='dark' as={Link} to="/type/blush">
                Blush
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "15rem" }}
              src={lipLiner}
              alt="shop lip liner"
            />
            <Card.Body>
              <Button variant='dark' as={Link} to="/type/lip_liner">
                lipLiner
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "15rem" }}
              src={eyebrow}
              alt="shop eyebrow"
            />
            <Card.Body>
              <Button variant='dark' as={Link} to="/type/eyebrow">
                eyebrow
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "15rem" }}
              src={eyeliner}
              alt="shop eyeliner"
            />
            <Card.Body>
              <Button variant='dark' as={Link} to="/type/eyeliner">
                eyeliner
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      {/* <div id="content2">
       
         
        
      </div> */}
      <div id="content3">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img
            className="mb-5"
            variant="top"
            style={{ width: "15rem" }}
            src={bronzer}
            alt="shop bronzer"
          />
          <Card.Body>
            <Button variant='dark' as={Link} to="/type/bronzer">
              Bronzer
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
