import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

function Header(props) {
  return (
    <div className="herobox">
        <div className="container-flex h-100">
            <div className="row m-0 p-0 h-100">
                <div className="col-12 p-0 d-flex align-items-center justify-content-center">
                    A long time ago in a galaxy far, far away...
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;



{/* <Carousel controls="false">
    <Carousel.Item>
        <ExampleCarouselImage src="slider1.jpg" text="First slide" />
    </Carousel.Item>
    <Carousel.Item>
        <ExampleCarouselImage src="slider2.jpg" text="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
        <ExampleCarouselImage src="slider3.jpg" text="Third slide" />
    </Carousel.Item>
</Carousel> */}