import React, { Component } from 'react';


import { Player } from 'video-react';

class Portfolio extends Component {

  render() {
    return (
      <div>
        <span> Web Development/App Design</span>
        <div className= 'demoVideo'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls  src={require("./ChickenFishSteak.1.mp4")}  autoplay={false} />

          </div>

          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./PoV.mov")}  />

          </div>
          <div className= 'description'>
            <span> Chicken Fish or Steak </span>
            <p> Creates virtual guest books for weddings. Couples can invite guests who can share comments and photos.</p>
            <p> Rails backend React frontend Cloudinary API</p>
          </div>
          <div className= 'description'>

            <span> PoV </span>
            <p> A platform where clothing stylists can put together their clients’ ideas through a visual moodboard.</p>
            <p> JSON databse React frontend </p>
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
