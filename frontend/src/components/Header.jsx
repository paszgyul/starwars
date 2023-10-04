import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

function Header(props) {
  return (
    // <div className="herobox">
    //     <div className="container-flex h-100">
    //         <div className="row m-0 p-0 h-100">
    //             <div className="col-12 p-0">
                    
    //             <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    //                 <div className="carousel-inner">
    //                     <div className="carousel-item active">
    //                         <img className="d-block w-100" src="slider1.jpg" alt="First slide" />
    //                     </div>
    //                     <div className="carousel-item">
    //                         <img className="d-block w-100" src="slider2.jpg" alt="Second slide" />
    //                     </div>
    //                     <div className="carousel-item">
    //                         <img className="d-block w-100" src="slider3.jpg" alt="Third slide" />
    //                     </div>
    //                 </div>
    //             </div>

    //             </div>
    //         </div>
    //     </div>
    // </div>

<Carousel controls="false">
    <Carousel.Item>
        <ExampleCarouselImage src="slider1.jpg" text="First slide" />
    </Carousel.Item>
    <Carousel.Item>
        <ExampleCarouselImage src="slider2.jpg" text="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
        <ExampleCarouselImage src="slider3.jpg" text="Third slide" />
    </Carousel.Item>
</Carousel>

  );
}

export default Header;