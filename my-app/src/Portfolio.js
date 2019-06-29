import React, { Component } from 'react';
import ProcessCard from './ProcessCard'


// import { Player } from 'video-react';

class Portfolio extends Component {

  state= {
    processChicken:false,
    processPov: false
  }
  showProcess= (demo) => {
    if (demo === 'chicken') {
      this.setState({processChicken: true})
    }
    if (demo === 'pov') {
      this.setState({processPov: true})
    }

  }

  render() {
    return (
      <div className= 'portolioPage'>
        <span id='outerSpans'> Web Development</span>
        <div className= 'demoVideo'>

          <div className='innerDemo'>
              <div className= 'description'>
                <span> Chicken Fish or Steak </span>
                <p> Creates virtual guest books for weddings. Couples can invite guests who can share comments and photos.</p>
                <p> Rails backend React frontend Cloudinary API</p>
                <button type="button" class="btn btn-outline-dark" onClick={()=>this.showProcess('chicken')}>Learn More</button>
              </div>
              <div className="embed-responsive embed-responsive-21by9">
                <video width="560" height="315" controls  src={require("./ChickenFishSteak.1.mp4")}  autoplay={false} />
              </div>
          </div>
          <div>
            {this.state.processChicken && <ProcessCard />}
          </div>
          <div className='innerDemo'>
              <div className= 'description'>
                <span> PoV </span>
                <p> A platform where clothing stylists can put together their clients’ ideas through a visual moodboard.</p>
                <p> JSON databse React frontend </p>
                <button type="button" class="btn btn-outline-dark" onClick={()=>this.showProcess('pov')}>Learn More</button>
              </div>
              <div className="embed-responsive embed-responsive-21by9">
                <video width="560" height="315" controls src={require("./PoV.mov")}  />
              </div>
          </div>
          <div>
            {this.state.processPov && <ProcessCard />}
          </div>
        </div>
        <span id='outerSpans'> Graphic Design </span>

        <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">

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
