import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ResultsAlert from './components/ResultsAlert';
import CardComponent from './components/CardComponent';
import CardButton from './components/CardButton';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import WinStreak from './components/WinStreak';
import getCards from './utils/getCards';
import setBothCardsWin from './utils/setBothCardsWin';
import setCard1WinsAndNotPicked from './utils/setCard1WinsAndNotPicked';
import setCard1WinsAndPicked from './utils/setCard1WinsAndPicked';
import setCard2WinsAndNotPicked from './utils/setCard2WinsAndNotPicked';
import setCard2WinsAndPicked from './utils/setCard2WinsAndPicked';
import setNeitherCardWins from './utils/setNeitherCardWins';
import resetGameState from './utils/resetGameState';
import setCardsData from './utils/setCardsData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: {
        image_uris: {
          art_crop: '',
          normal: '',
          current: ''
        },
        name: '',
        power: 0,
        toughness: 0
      },
      card2: {
        image_uris: {
          art_crop: '',
          normal: '',
          current: ''
        },
        name: '',
        power: 0,
        toughness: 0
      },
      winner: false,
      bothStrong: false,
      bothWeak: false,
      winStreak: 0,
      btnClicked: null,
      roundCompleted: false,
      winningCard: ''
    };

    this.showFullArt = this.showFullArt.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.loadCards = this.loadCards.bind(this);
  }

  loadCards() {
    getCards()
      .then(json => this.setState(setCardsData(json)))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.loadCards();
  }

  showFullArt() {
    const { card1, card2 } = this.state;
    card1.image_uris.current = card1.image_uris.normal;
    card2.image_uris.current = card2.image_uris.normal;
    this.setState({
      card1,
      card2
    });
  }

  calculateWinner(e) {
    e.preventDefault();

    this.showFullArt();

    const { power: power1, toughness: toughness1 } = this.state.card1;
    const { power: power2, toughness: toughness2 } = this.state.card2;
    const canCard1Win = power1 >= toughness2 ? true : false;
    const canCard2Win = power2 >= toughness1 ? true : false;
    const bothCardsWin = canCard1Win && canCard2Win ? true : false;
    const neitherCardWins = !canCard1Win && !canCard2Win ? true : false;
    const onlyCard1Wins = canCard1Win && !canCard2Win ? true : false;
    const onlyCard2Wins = !canCard1Win && canCard2Win ? true : false;
    const pickedCard = e.target.id === 'btnCard1' ? 'card1' : 'card2';

    if (bothCardsWin) {
      this.setState(setBothCardsWin());
    } else if (neitherCardWins) {
      this.setState(setNeitherCardWins());
    } else if (onlyCard1Wins && pickedCard === 'card1') {
      this.setState(setCard1WinsAndPicked());
    } else if (onlyCard1Wins && pickedCard === 'card2') {
      this.setState(setCard1WinsAndNotPicked());
    } else if (onlyCard2Wins && pickedCard === 'card2') {
      this.setState(setCard2WinsAndPicked());
    } else if (onlyCard2Wins && pickedCard === 'card1') {
      this.setState(setCard2WinsAndNotPicked());
    }
  }

  playAgain() {
    this.loadCards();
    this.setState(resetGameState);
  }

  render() {
    const {
      card1,
      card2,
      bothStrong,
      bothWeak,
      winner,
      winningCard,
      roundCompleted,
      winStreak
    } = this.state;
    return (
      <div className="App text-center">
        <Header />
        <Container>
          <Row>
            <Col>
              <CardComponent
                id="card1"
                card={card1}
                {...{ winner, winningCard }}
              />
              <CardButton
                id="btnCard1"
                roundCompleted={roundCompleted}
                card={card1}
                calculate={this.calculateWinner}
              />
            </Col>
            <Col>
              <CardComponent
                id="card2"
                card={card2}
                {...{ winner, winningCard }}
              />
              <CardButton
                id="btnCard2"
                roundCompleted={roundCompleted}
                card={card2}
                calculate={this.calculateWinner}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '40px' }}>
            <Col>
              {roundCompleted ? (
                <ResultsAlert {...{ bothStrong, bothWeak, winner }} />
              ) : null}
              <WinStreak winStreak={winStreak} />
              <Button className="btn-lg" onClick={this.playAgain}>
                Play Again
              </Button>
              <InfoSection />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
