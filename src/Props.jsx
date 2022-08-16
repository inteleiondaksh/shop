import React from 'react';
import ReactDOM from 'react-dom';

function MissedGoal() {
    return <h1>YOU MISSED! I will say this I thought I had the flu, but then I realized it was your face that made me sick.
    </h1>;
}

function MadeGoal() {
    return <h1>WOW its GOAL! We will gift you iphone 13 pro max you idiotic maniac</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  else{
  return <MissedGoal/>;
  }
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
)