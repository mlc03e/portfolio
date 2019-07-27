import React, { Component } from 'react';



// import { Player } from 'video-react';

class Portfolio extends Component {


  state= {
    idx: 0,
    refresh: false,
    play: null
  }
  // let play= autoplay
  play=()=> {
    console.log('play');
    return <video width="560" height="315" src={require("./videos/AimeeMannLabrador.mp4") } autoPlay />
    // this.setState({play: autoplay})
    // const autoPlay= autoPlay
  }
  //
  images= ['./cards.jpg', './campbell1.jpg', './campbell2.jpg','./campbell3.jpg', './cryro1.png', './chrisCardFront.png', './chrisCardBack.png', './cryro2.png', './play.png', './katelyn.png' ]
  //
  leftArrow= () => {
    this.setState({idx: this.state.idx - 1})
  }

  rightArrow= () => {
    this.setState({idx: this.state.idx + 1})
  }
  componentDidMount() {
    this.setState({refresh:true})
  }
  render() {

    return (
      <div className= 'portfolioPage'>
        <div>
          <span id='outerSpans'> Graphic Design </span>
          <div className='graphicDesign'>
            <div className='arrows'>
              {this.state.idx > 0 ? <img src={require('./arrow-left.svg')} width='200px' alt="..." onClick={this.leftArrow}/>: <img src={require('./arrow-left-disabled.svg')} width='200px' alt="..." />}
            </div>
            <div className= 'center'>
              <img src={require(`${this.images[this.state.idx]}`)}  alt="..."/>
            </div>
            <div className='arrows'>
              {this.state.idx < this.images.length -1 ? <img src={require('./arrow-right.svg')} width='200px' alt="..." onClick={this.rightArrow}/> : <img src={require('./arrow-right-disabled.svg')} width='200px' alt="..." />}
            </div>
          </div>

        </div>
    <div >
      <span id='outerSpans'> Costume Design </span>
      <div className= 'costumeVideos'>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/AimeeMannLabrador.mp4") } />
              <div className= 'overlay' onClick= {this.play} >
                <div className= 'content'>
                  <h1>Music Video</h1>
                  <h1>Aimme Mann</h1>
                  </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/AimeeMannCharmer.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Music Video</h1>
                  <h1>Aimme Mann</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/BoysAtlanticBroadband.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Atlantic Broadband</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/central-park.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Central Park</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/CNNTheHuntwithJohnWalsh.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>TV Series</h1>
                  <h1>CNN's The Hunt with John Walsh</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/DuckQuacksDontEcho.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>TV Series</h1>
                  <h1>Nat Geo's Duck Quacks Don't Echo</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/EpicHistory.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>TV Special</h1>
                  <h1>History Channel's Epic History of Everyday Things</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Ford.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Ford</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Geico.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Geico</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Grey_Goose.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Grey Goose</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Insurance.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Aflac</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/LittleCaesars.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Little Caesars</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Marshalls.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Marshalls</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/MTV.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>TV Series</h1>
                  <h1>MTV's Middle of the Night Show</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/NotWavingButDrowning.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Feature Film</h1>
                  <h1>Not Waving But Drowning</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/OrganicBalance.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Organic Balance</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/RealEstate.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Music Video</h1>
                  <h1>Real Estate</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/StateFarm.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>State Farm</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/Verizon.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Verizon</h1>
                </div>
              </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className="embed-responsive embed-responsive-21by9">
            <video width="560" height="315" controls src={require("./videos/yogurt.mp4")}  />
              <div className= 'overlay'>
                <div className= 'content'>
                  <h1>Commercial</h1>
                  <h1>Yo Kids Yogurt</h1>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    );
  }

}
// {this.state.refresh && <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
//   <span id='designSpan'> Graphic Design </span>
//     <div className="carousel-inner">
//       <div className="carousel-item active" data-interval="100">
//         <img src={require('./cards.jpg')} className="d-block w-100" alt="..."/>
//       </div>
//     <div className="carousel-item" data-interval="100">
//       <div id= 'threeColumn'>
//         <div id='magazine'>
//           <img src={require('./campbell1.jpg')} className="d-block w-100" alt="..."/>
//           <img src={require('./campbell2.jpg')} className="d-block w-100" alt="..."/>
//           <img src={require('./campbell3.jpg')} className="d-block w-100" alt="..."/>
//         </div>
//       </div>
//     </div>
//     <div className="carousel-item" data-interval="100">
//       <img src={require('./cryro1.png')} className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item" data-interval="100">
//       <div id= 'twoColumn' >
//         <img src={require('./chrisCardFront.png')} className="d-block w-100" alt="..." />
//         <img src={require('./chrisCardBack.png')} className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <div className="carousel-item" data-interval="100">
//       <img src={require('./cryro2.png')} className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item" data-interval="100">
//       <img src={require('./play.png')} className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item" data-interval="100">
//       <img src={require('./katelyn.png')} className="d-block w-100" alt="..." />
//     </div>
//   </div>
// </div>}

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
