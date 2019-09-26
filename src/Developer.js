import React, { Component } from 'react';
import PovProcess from './PovProcess';
import ChickenProcess from './ChickenProcess'
import ReactPlayer from 'react-player';


class Developer extends Component {
  state= {
    processChicken:false,
    processPov: false
  }
  showProcess= (demo) => {
    if (demo === 'chicken') {
      this.setState({processChicken: !this.state.processChicken})
    }
    if (demo === 'pov') {
      this.setState({processPov: !this.state.processPov})
    }
  }
  render() {
    return (
      <div className= 'developerPage'>
      <div className= 'demoVideo'>
        <span id='outerSpans'> Web Development</span>
        <div className='innerDemo'>
            <div className= 'description'>
            <span >Chicken Fish or Steak </span>
              <p > Creates virtual guest books for weddings. Couples can invite guests who can share comments and photos.</p>
              <p > Rails backend React frontend Cloudinary API</p>
              <button type="button" class="btn btn-dark btn-block" onClick={()=>this.showProcess('chicken')} >Learn More</button>

            </div>
            <div className="embed-responsive embed-responsive-21by9">
              <ReactPlayer width="560" height="315" controls  url='https://www.youtube.com/watch?v=aZose6y6Ltw'  autoplay={false} />
            </div>
        </div>
        {this.state.processChicken && <ChickenProcess />}

        <div className='innerDemo'>
            <div className= 'description'>
              <span> PoV </span>
              <p> A platform where clothing stylists can put together their clients’ ideas through a visual moodboard.</p>
              <p> JSON databse React frontend </p>
              <button type="button" class="btn btn-dark btn-block" onClick={()=>this.showProcess('pov')}>Learn More</button>
            </div>
            <div className="embed-responsive embed-responsive-21by9" >
              <ReactPlayer  url='https://www.youtube.com/watch?v=7ptUeZNKwoY' width='100%'
          controls />
            </div>
            {this.state.processPov && <PovProcess />}
        </div>


      </div>
      </div>
    );
  }

}

export default Developer;
