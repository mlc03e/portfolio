import React, { Component } from 'react';



// import { Player } from 'video-react';

class Portfolio extends Component {



  render() {
    return (
      <div className= 'portfolioPage'>


        <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
          <span id='outerSpans'> Graphic Design </span>
           <img src={require('./cards.jpg')}  alt="..."/>
           <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
           <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
           <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
            <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
            <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
            <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
            <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
            <img src={require('./play.png')} className="d-block w-100" alt="..." />
            <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />
        </div>

      </div>
    );
  }

}


// <div className="carousel-inner">
//   <div className="carousel-item active" data-interval="100">
//     <img src={require('./cards.jpg')} className="d-block w-100" alt="..."/>
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
//   </div>
//
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <div id= 'twoColumn' >
//       <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
//       <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./play.png')} className="d-block w-100" alt="..." />
//   </div>
//   <div className="carousel-item" data-interval="100">
//     <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />
//   </div>
// </div>
//
export default Portfolio;
