import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className='about'>
        <img src={require('./headshot.png')} className="img-thumbnail" alt='Meghan headshot' />
        <div>
          <span id='name'>Meghan Campbell</span>
          <p> My passion has always been creating things that solve a problem and are fun to use whether in fashion or programming. I got my degree in apparel design and fashion merchandising then worked in the film and tv business as a costume designer for almost 10 years. In addition to proficiency in Ruby on Rails, JavaScript, and React, I bring strong collaborative skills and thrive in a team environment. I’m accustomed to performing in fast-paced deadline driven settings with an emphasis on working within budget requirements. My abilities to problem solve and adapt quickly were refined through costume designing and now I am ready to expand those skills in a developer role.</p>
        </div>
      </div>
    );
  }

}

export default About;
