import React, { Component } from 'react';



// import { Player } from 'video-react';

class Portfolio extends Component {



  render() {
    return (
      <div className= 'portfolioPage'>


        <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
          <span id='outerSpans'> Graphic Design </span>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="500">
              <img src={require('./cards.jpg')} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-interval="500">
              <div id= 'threeColumn'>
                <div></div>
                <div id='magazine'>
                  <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
                  <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
                  <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
                </div>
                <div></div>
              </div>
            </div>
            <div className="carousel-item" data-interval="500">
              <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-interval="500">
              <div id= 'twoColumn' >
                <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
                <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="carousel-item" data-interval="500">
              <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-interval="500">
              <img src={require('./play.png')} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-interval="500">
              <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>

      </div>
    );
  }

}


// <div>
// <Player>
//   <source src={require("./ChickenFishSteak.1.mp4")}/>
// </Player>
// <Player>
//   <source src={require("./PoV.mov")}/>
// </Player>
// </div>
export default Portfolio;
