import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
      <>
        <body>
          <h1>Photoshop Projects from ART 168</h1>
          <p>These are projects that I made for my Digital Media class using Adobe Photoshop. In this class, we learned how to use new tools in Photoshop each week and are tasked with creating "sketches" using those tools (basically just taking a pre-existing image and editing it). These are a few of mine that I thought turned out well.</p>
          <button onClick={handleNextClick}>
            Next
          </button>

          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
          <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
          </button>
          {showMore && <p>{sculpture.description}</p>}
          <br/>
          <img
              src={sculpture.url}
              alt={sculpture.alt}
          />
        </body>
      </>
  );
}
