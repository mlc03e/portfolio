import React, { Component } from 'react';
import ReactPlayer from 'react-player';


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
    // return <video width="560" height="315" src={require("./videos/AimeeMannLabrador.mp4") } autoPlay />
    // this.setState({play: autoplay})
    // const autoPlay= autoPlay
  }
  //
  images= [{img: './cards.jpg', description: 'Adobe Illustrator'}, {img:'./campbell1.jpg', description: 'Adobe PhotoShop & InDesign'}, {img:'./campbell2.jpg', description: 'Adobe PhotoShop & InDesign'}, {img:'./campbell3.jpg', description: 'Adobe PhotoShop & InDesign'}, {img:'./cryro1.png', description: 'Adobe Illustrator'}, {img:'./chrisCardFront.png', description: 'Adobe Illustrator'}, {img:'./chrisCardBack.png', description: 'Adobe Illustrator'}, {img:'./cryro2.png', description: 'Adobe Illustrator'}, {img:'./play.png', description: 'Adobe PhotoShop & Illustrator'}, {img:'./katelyn.png', description: 'Adobe PhotoShop & Illustrator'}]
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
          <div>
            <span id='outerSpans'> Graphic Design </span>
            <h1 id='description'>{`${this.images[this.state.idx].description}`}</h1>
          </div>
          <div className='graphicDesign'>
            <div className='arrows'>
              {this.state.idx > 0 ? <img src={require('./arrow-left.svg')} width='200px' alt="..." onClick={this.leftArrow}/>: <img src={require('./arrow-left-disabled.svg')} width='200px' alt="..." />}
            </div>
            <div className= 'center'>
              <img src={require(`${this.images[this.state.idx].img}`)}  alt="..."/>
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
            <ReactPlayer width="560" height="315" controls url={'https://www.youtube.com/watch?v=3Uu8kJfFjXw' } />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=4RgLjrEk7Dc'/>
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=MRcpVcG3I8w'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=3N00jB3pf3M'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=jBNbYAVypYE'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=P8O5RJEkEHo'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=YM-3eLQNr1M'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=kD1ttnmGRZY'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=yjYAFTKuP9A'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=gw4BJBud2Vw'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=QQN05SHqi6o'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=S37dGCYthkk'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=N5Nl4_oztQ0'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=yLKN27QMbgI'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=hYALaG_3TTM'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=6bASqcIe1Og'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=B2j2wroJKeU'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=kgHXlkqwZEQ'  />
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
            <ReactPlayer width="560" height="315" controls url='https://www.youtube.com/watch?v=rutThKy5WeY'  />
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
