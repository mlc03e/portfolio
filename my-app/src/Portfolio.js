import React, { Component } from 'react';


import { Player } from 'video-react';

class Portfolio extends Component {

  render() {
    return (
      <div>
      <Player>
        <source src={require("./ChickenFishSteak.1.mp4")}/>
      </Player>
      <Player>
        <source src={require("./PoV.mov")}/>
      </Player>
      </div>
    );
  }

}

export default Portfolio;
