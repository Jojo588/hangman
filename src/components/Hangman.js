import React from 'react';

const Hangman = ({ wrongGuesses }) => {
  return (
    <div className='hangedMan'>
      <div className="hanger">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div id="human">
        <div className="head" style={{ display: wrongGuesses >= 1 ? 'block' : 'none' }}></div>
        <div className="body" style={{ display: wrongGuesses >= 2 ? 'block' : 'none' }}></div>
        <div className="leftArm" style={{ display: wrongGuesses >= 3 ? 'block' : 'none' }}></div>
        <div className="rightArm" style={{ display: wrongGuesses >= 4 ? 'block' : 'none' }}></div>
        <div className="leftLeg" style={{ display: wrongGuesses >= 5 ? 'block' : 'none' }}></div>
        <div className="rightLeg" style={{ display: wrongGuesses >= 6 ? 'block' : 'none' }}></div>
      </div>
    </div>
  );
};

export default Hangman;
