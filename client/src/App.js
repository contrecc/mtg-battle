import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import ResultsAlert from './components/ResultsAlert';
import CardComponent from './components/CardComponent';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import getCards from './utils/getCards';
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
      loading: false,
      winner: false,
      bothStrong: false,
      bothWeak: false,
      winStreak: 0,
      btnClicked: null,
      roundCompleted: false,
      winningCard: '',
      pickedCard: ''
    };

    this.showFullArt = this.showFullArt.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.loadCards = this.loadCards.bind(this);
  }

  loadCards() {
    getCards()
      .then(json =>
        this.setState({
          card1: {
            image_uris: {
              art_crop: json[0].image_uris.art_crop,
              normal: json[0].image_uris.normal,
              current: json[0].image_uris.art_crop
            },
            name: json[0].name,
            power: Number(json[0].power),
            toughness: Number(json[0].toughness)
          },
          card2: {
            image_uris: {
              art_crop: json[1].image_uris.art_crop,
              normal: json[1].image_uris.normal,
              current: json[1].image_uris.art_crop
            },
            name: json[1].name,
            power: Number(json[1].power),
            toughness: Number(json[1].toughness)
          }
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState(function(prevState, props) {
      return { loading: true };
    });
    this.loadCards();
    this.setState(function(prevState, props) {
      return { loading: false };
    });
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
      this.setState({
        bothStrong: true,
        winStreak: this.state.winStreak + 1,
        winningCard: '',
        winner: false,
        pickedCard,
        roundCompleted: true
      });
    } else if (neitherCardWins) {
      this.setState({
        bothWeak: true,
        winStreak: this.state.winStreak + 1,
        winningCard: '',
        winner: false,
        pickedCard,
        roundCompleted: true
      });
    } else if (onlyCard1Wins && pickedCard === 'card1') {
      this.setState({
        winner: true,
        winStreak: this.state.winStreak + 1,
        winningCard: 'card1',
        pickedCard,
        roundCompleted: true
      });
    } else if (onlyCard1Wins && pickedCard === 'card2') {
      this.setState({
        winner: false,
        winStreak: 0,
        winningCard: 'card1',
        pickedCard,
        roundCompleted: true
      });
    } else if (onlyCard2Wins && pickedCard === 'card2') {
      this.setState({
        winner: true,
        winStreak: this.state.winStreak + 1,
        winningCard: 'card2',
        pickedCard,
        roundCompleted: true
      });
    } else if (onlyCard2Wins && pickedCard === 'card1') {
      this.setState({
        winner: false,
        winStreak: 0,
        winningCard: 'card2',
        pickedCard,
        roundCompleted: true
      });
    }
  }

  playAgain() {
    this.loadCards();
    this.setState({
      bothStrong: false,
      bothWeak: false,
      winner: false,
      winningCard: '',
      loading: false,
      roundCompleted: false,
      pickedCard: ''
    });
  }

  render() {
    const {
      loading,
      card1,
      card2,
      bothStrong,
      bothWeak,
      winner,
      winningCard,
      pickedCard,
      roundCompleted
    } = this.state;
    return (
      <div className="App text-center">
        <Header />
        <Container>
          <Row>
            <Col>
              {loading ? (
                <Card>
                  <CardBody>
                    <p>Loading...</p>
                  </CardBody>
                </Card>
              ) : (
                <CardComponent
                  id="card1"
                  card={card1}
                  {...{ winner, winningCard, pickedCard }}
                />
              )}
              {roundCompleted ? (
                <Button
                className="btn-lg"
                id="btnCard1"
                onClick={this.calculateWinner}
                disabled
              >
                {card1.name}
              </Button>
              ) : (
                <Button
                className="btn-lg"
                id="btnCard1"
                onClick={this.calculateWinner}
              >
                {card1.name}
              </Button>
              )}
            </Col>
            <Col>
              {loading ? (
                <Card>
                  <CardBody>
                    <p>Loading...</p>
                  </CardBody>
                </Card>
              ) : (
                <CardComponent
                  id="card2"
                  card={card2}
                  {...{ winner, winningCard, pickedCard }}
                />
              )}
              {roundCompleted ? (
                <Button
                className="btn-lg"
                id="btnCard2"
                onClick={this.calculateWinner}
                disabled
              >
                {card2.name}
              </Button>
              ) : (
                <Button
                className="btn-lg"
                id="btnCard2"
                onClick={this.calculateWinner}
              >
                {card2.name}
              </Button>
              )}
            </Col>
          </Row>
          <Row style={{ marginTop: '60px' }}>
            <Col>
              {winner || bothStrong || bothWeak || winningCard ? (
                <ResultsAlert
                  bothStrong={bothStrong}
                  bothWeak={bothWeak}
                  winner={winner}
                />
              ) : null}
              <h2 className="text-info" style={{marginBottom: '50px'}}>Win Streak: {this.state.winStreak}</h2>
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
