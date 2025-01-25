import React from 'react';
import "./newscard.css"
import { useState } from 'react';



function Display({ headline, caption, url ,url2}) {
    console.log("hie")
    console.log(url2)
  return (
    <div className='mainpgcontainer'>
    <div className="newscard">
      <img className="cardimg" src={url} alt={headline} />
      <p className="title">{headline}</p>
      <p className="caption">{caption}</p>
      <a href= {url2} target='_blank' className="discover-button" >
          Discover more
          </a>
    </div>
    </div>
  );
}

function Trends({ name, imgurl, info }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDisplay = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className='trend-card' onClick={toggleDisplay}>
      <img src={imgurl} className='icont' alt="trend-icon" />
      <div className='trendhead'>{name}</div>
      {isVisible && <p className='add-info'><hr/>{info}</p>}
     
    </div>
  );
}

export {Trends};
export default Display;