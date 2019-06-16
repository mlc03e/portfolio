import React, { Component } from 'react';


import { Player } from 'video-react';

class Portfolio extends Component {

  render() {
    return (
      <div className= 'demoVideo'>
        <div className="embed-responsive embed-responsive-21by9">
          <video width="560" height="315" controls  src={require("./ChickenFishSteak.1.mp4")}  autoplay={false} />
        </div>
        <div className="embed-responsive embed-responsive-21by9">
          <video width="560" height="315" controls src={require("./PoV.mov")}  />
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
