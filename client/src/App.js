import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Button
} from 'reactstrap';
import ResultsAlert from './components/ResultsAlert';
import CardComponent from './components/CardComponent';
import './App.css';
//import getCard from './utils/getCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: {
        image_uris: {
          art_crop: '',
          border_crop: '',
          large: '',
          normal: '',
          png: '',
          small: ''
        },
        name: '',
        power: 0,
        toughness: 0
      },
      card2: {
        image_uris: {
          art_crop: '',
          border_crop: '',
          large: '',
          normal: '',
          png: '',
          small: ''
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
      winningCard: ''
    };

    this.getCard1 = this.getCard1.bind(this);
    this.getCard2 = this.getCard2.bind(this);
    this.showFullArt = this.showFullArt.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.playAgain = this.playAgain.bind(this);
    //this.showFullArt2 = this.showFullArt2.bind(this);
  }

  getCard1() {
    fetch('/card')
      .then(response => response.json())
      .then(json =>
        this.setState({
          card1: {
            image_uris: {
              art_crop: json.image_uris.art_crop,
              border_crop: json.image_uris.border_crop,
              large: json.image_uris.large,
              normal: json.image_uris.normal,
              png: json.image_uris.png,
              small: json.image_uris.small,
              current: json.image_uris.art_crop
            },
            name: json.name,
            power: Number(json.power),
            toughness: Number(json.toughness)
          }
        })
      )
      .catch(error => console.log(error));
  }

  getCard2() {
    fetch('/card')
      .then(response => response.json())
      .then(json =>
        this.setState({
          card2: {
            image_uris: {
              art_crop: json.image_uris.art_crop,
              border_crop: json.image_uris.border_crop,
              large: json.image_uris.large,
              normal: json.image_uris.normal,
              png: json.image_uris.png,
              small: json.image_uris.small,
              current: json.image_uris.art_crop
            },
            name: json.name,
            power: Number(json.power),
            toughness: Number(json.toughness)
          }
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState(function(prevState, props) {
      return { loading: true };
    });
    this.getCard1();
    this.getCard2();
    this.setState(function(prevState, props) {
      return { loading: false };
    });
  }

  showFullArt() {
    const { card1, card2 } = this.state;
    card2.image_uris.current = card2.image_uris.normal;
    card1.image_uris.current = card1.image_uris.normal;
    this.setState({
      card1,
      card2
    });
  }

  // showFullArt1() {
  //   const { card1 } = this.state;
  //   card1.image_uris.current = card1.image_uris.normal;
  //   this.setState({
  //     card1
  //   });
  // }

  calculateWinner(e) {
    e.preventDefault();

    this.showFullArt();

    const { power: power1, toughness: toughness1 } = this.state.card1;
    const { power: power2, toughness: toughness2 } = this.state.card2;
    const canCard1Win = power1 >= toughness2 ? true : false;
    const canCard2Win = power2 >= toughness1 ? true : false;
    const bothCardsWin = canCard1Win && canCard2Win ? true : false;

    if (e.target.id === 'btnCard1') {
      if (bothCardsWin) {
        this.setState({
          bothStrong: true,
          winStreak: this.state.winStreak + 1,
          winningCard: ''
        });
      } else if (canCard1Win) {
        this.setState({
          winner: true,
          winStreak: this.state.winStreak + 1,
          winningCard: 'card1'
        });
      } else if (canCard2Win) {
        this.setState({ winner: false, winStreak: 0, winningCard: 'card2' });
      } else {
        this.setState({
          bothWeak: true,
          winStreak: this.state.winStreak + 1,
          winningCard: ''
        });
      }
    } else {
      if (bothCardsWin) {
        this.setState({
          bothStrong: true,
          winStreak: this.state.winStreak + 1,
          winningCard: ''
        });
      } else if (canCard1Win) {
        this.setState({ winner: false, winStreak: 0, winningCard: 'card1' });
      } else if (canCard2Win) {
        this.setState({
          winner: true,
          winStreak: this.state.winStreak + 1,
          winningCard: 'card2'
        });
      } else {
        this.setState({
          bothWeak: true,
          winStreak: this.state.winStreak + 1,
          winningCard: ''
        });
      }
    }
  }

  playAgain() {
    this.getCard1();
    this.getCard2();
    this.setState({
      bothStrong: false,
      bothWeak: false,
      winner: false,
      loading: false
    });
  }

  // fetch('/card')
  //   .then(response => response.json())
  //   .then(json =>
  //     this.setState({
  //       card1: {
  //         image_uris: {
  //           art_crop: json.image_uris.art_crop,
  //           border_crop: json.image_uris.border_crop,
  //           large: json.image_uris.large,
  //           normal: json.image_uris.normal,
  //           png: json.image_uris.png,
  //           small: json.image_uris.small
  //         },
  //         name: json.name,
  //         power: json.power,
  //         toughness: json.toughness
  //       }
  //     })
  //   )
  //   .catch(error => console.log(error));
  //}

  render() {
    const {
      loading,
      card1,
      card2,
      bothStrong,
      bothWeak,
      winner,
      winningCard
    } = this.state;
    return (
      <div className="App">
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
                  {...{ winner, winningCard }}
                />
              )}
              <Button id="btnCard1" onClick={this.calculateWinner}>
                {card1.name}
              </Button>
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
                  {...{ winner, winningCard }}
                />
              )}
              <Button id="btnCard2" onClick={this.calculateWinner}>
                {card2.name}
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: '60px' }}>
            <Col>
              {winner || bothStrong || bothWeak ? (
                <ResultsAlert
                  bothStrong={bothStrong}
                  bothWeak={bothWeak}
                  winner={winner}
                />
              ) : null}
              <p>Win Streak: {this.state.winStreak}</p>
              <Button onClick={this.playAgain}>Play Again</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
