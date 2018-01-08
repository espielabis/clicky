import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
// import Game from './components/Game';
import Nav from './components/Nav';
import Character from "./components/Character";
import characters from "./characters.json";
// import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters,
      score: 0,
      topScore: 0,
      message: "Good luck!"
    };
    // console.log(this.props);

    // preserve initial state in new object
    // this.baseState = this.state;
    // console.log(this.baseState);
    // console.log(this.baseState.characters);
    // const charactersBaseState = this.baseState.characters;
    // console.log(charactersBaseState);
  }


  resetGame = () => {
    // resets components to initial state (click: false, score: 0, etc.)
    // this.setState(this.baseState.characters);

    this.setState({
      // charactersBaseState,
      characters,
      score: 0,

      message: "Try again"
    });
  }


  correctGuess = () => {
    // "correct, keep going" message ~DONE
    // shuffle squares
    // score +1 ~DONE
    let scoreValue = this.state.score;

    ++scoreValue;


    if (scoreValue === 12) {
      this.setState({
        score: scoreValue,
        topScore:12,
        message: "You win!!"
      });

    } else {

      this.setState({
        score: scoreValue,

        message: "You've got it! Keep going."
      });
    }
  }


  wrongGuess = () => {
    // supposed to have something saving a high score??*************************
    let scoreValue = this.state.score;

    let endScore = this.state.topScore;
    if (scoreValue > endScore)
    this.setState({
      topScore: scoreValue,
      });
    console.log(endScore);

    this.resetGame();

    // maybe add toast or modal with loosing message if "this.baseState" works better to reset
  }




  // sortShuffle() {
  //   this.setState({
  //     sortingMethod: 'shuffle',
  //     articles: shuffle(this.state.articles)
  //   });
  // }


  handleClick = (id) => {
    // ^^Stores the id of image clicked in parameter

    // console.log("Image clicked");
    // console.log(id);

    // Compared whether or not been clicked before
    let guessedCorrectly = false;

    const squaresMap = this.state.characters.map(friend => {
      // Makes a copy of the characters array to manupulate
      const newFriendData = { ...friend };

      // then match the id to one in array AND check if click is currently true or false
      if (newFriendData.id === id) {
        if (!newFriendData.click) {

          newFriendData.click = true;
          guessedCorrectly = true;
          // Now the -next- time that same square is clicked, it should set to false and stop the game.... right?? ~ Stops game, yes, set to false no
            // The next time the square is clicked, "incorrect guess" logs -- don't need to set to false until the game resets. this isn't "switching" true and false like still and animate
          console.log(friend);
        }
        // console.log(newFriendData);
      }
      return newFriendData;
    });





    // console.log(squaresMap);  //NOW returns the changed image AND the rest of the un-changed images

    // Triggers shuffle effect when square is clicked ~ should this be separate in the correctGuess / wrongGuess functions?...
    // the example shuffles AND shakes when game is lost
    this.setState({
      sortingMethod: 'shuffle',
      characters: shuffle(squaresMap)
    });

    // Determines if square was clicked before and fires appropriate function
    guessedCorrectly ? this.correctGuess() : this.wrongGuess();
  }


  render() {
    return (
      <div className="App">

        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Container>
          <p className="App-intro">
            How good is your memory? Click each square ONCE!
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>

              {/* Game renders here within overall centered materialize div */}

              <main className="game-squares">
                <Row style={{position: "relative"}}>

                  {/* Each of 12 squares rendered within this row div */}

                  {this.state.characters.map(friend => (
                    <Character
                      image={ friend.image }
                      alt={ friend.name }
                      key={ friend.id }
                      id={ friend.id }
                      click={ friend.click }
                      handleClick={ this.handleClick }
                    />
                  ))}

                </Row>
              </main>

            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
