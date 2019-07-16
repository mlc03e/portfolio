import React, { Component } from 'react';



// import { Player } from 'video-react';

class Portfolio extends Component {

  state= {
    // idx: 0
    refresh: false
  }
  //
  // images= ['./cards.jpg', './campbell1.jpg', './campbell2.jpg','./campbell3.jpg', './cryro1.png', './chrisCardFront.png', './chrisCardBack.png', './cryro2.png', './play.png', './katelyn.png' ]
  //
  // leftArrow= () => {
  //   this.setState({idx: this.state.idx - 1})
  // }
  //
  // rightArrow= () => {
  //   this.setState({idx: this.state.idx + 1})
  // }
  componentDidMount() {
    this.setState({refresh:true})
  }
  render() {

    return (
      <div className= 'portfolioPage'>
      {this.state.refresh && <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
        <span id='designSpan'> Graphic Design </span>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="100">
              <img src={require('./cards.jpg')} className="d-block w-100" alt="..."/>
            </div>
          <div className="carousel-item" data-interval="100">
            <div id= 'threeColumn'>
              <div id='magazine'>
                <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
                <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
                <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="100">
            <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="100">
            <div id= 'twoColumn' >
              <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
              <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item" data-interval="100">
            <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="100">
            <img src={require('./play.png')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="100">
            <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>}
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/AimeeMannLabrador.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/AimeeMannCharmer.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/BoysAtlanticBroadband.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/central-park.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/CNNTheHuntwithJohnWalsh.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/DuckQuacksDontEcho.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/EpicHistory.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Ford.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Geico.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Grey_Goose.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Insurance.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/LittleCaesars.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Marshalls.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/MTV.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/NotWavingButDrowning.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/OrganicBalance.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/RealEstate.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/StateFarm.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/Verizon.mp4")}  />
      </div>
      <div className="embed-responsive embed-responsive-21by9">
        <video width="560" height="315" controls src={require("./videos/yogurt.mp4")}  />
      </div>
      </div>

    );
  }

}
// <div className= 'portfolioPage'>
//   <div className='arrows'>
//     <img src={require('./arrow-left.svg')} width='200px' alt="..." onClick={this.leftArrow}/>
//   </div>
//   <div className= 'center'>
//     <span id='outerSpans'> Graphic Design </span>
//     <img src={require(`${this.images[this.state.idx]}`)}  alt="..."/>
//   </div>
//   <div className='arrows'>
//     <img src={require('./arrow-right.svg')} width='200px' alt="..." onClick={this.rightArrow}/>
//   </div>
// </div>

//
// <img src={require('./cards.jpg')}  alt="..."/>
// <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
// <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
// <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
//  <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
//  <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
//  <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
//  <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
//  <img src={require('./play.png')} className="d-block w-100" alt="..." />
//  <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />

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
