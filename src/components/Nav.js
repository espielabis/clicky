
import React from 'react';
import '../styles/Nav.css';


const Nav = props => (
  <header className="App-header">
    <h1 className="App-title">ClickyTime</h1>
    {/*<p className="score">Score goes here!</p>*/}
  <h2 className="score">Score: { props.score } out of 12 | Top Score: { props.topScore }</h2>
  <p className="message">{ props.message }</p>
  </header>
);

export default Nav;
