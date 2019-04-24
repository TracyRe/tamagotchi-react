import React from 'react';
import LifeCount from './LifeCount';
import Feed from './Feed';
import PropTypes from 'prop-types';

function Counter(props) {
  return(
    <div>
      <h1>The life of Tamagotchi</h1>
      <LifeCount/>
      <Feed feedDisplay={props.feedDisplay}
      onIncreaseFeed = {props.onIncreaseFeed}
  />
    </div>
  );
}

Counter.propTypes = {
  feedDisplay: PropTypes.number,
  onIncreaseFeed: PropTypes.func
};

export default Counter;