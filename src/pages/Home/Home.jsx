import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../img/banner/banner1.jpg";
import Banner2 from "../../img/banner/banner2.jpg";
import Banner3 from "../../img/banner/banner3.jpg";

const Home = () => {

   return (
     <div className="main">
       <Carousel>
         <Carousel.Item interval={1000}>
           <img src={Banner1} alt="First slide" className="d-block w-100" />
           <Carousel.Caption>
             <h3>First slide label</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img src={Banner2} alt="Second slide" className="d-block w-100" />
           <Carousel.Caption>
             <h3>Second slide label</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img src={Banner3} alt="Third slide" className="d-block w-100" />
           <Carousel.Caption>
             <h3>Third slide label</h3>
             <p>
               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
             </p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </div>
   );
};

export default Home;
