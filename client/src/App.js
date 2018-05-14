import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
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
        power: '',
        toughness: ''
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
        power: '',
        toughness: ''
      },
      loading: false
    };

    this.getCard1 = this.getCard1.bind(this);
    this.getCard2 = this.getCard2.bind(this);
    this.showFullArt1 = this.showFullArt1.bind(this);
    this.showFullArt2 = this.showFullArt2.bind(this);
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
            power: json.power,
            toughness: json.toughness
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
            power: json.power,
            toughness: json.toughness
          }
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getCard1();
    this.getCard2();
    this.setState({ loading: false });
  }

  showFullArt2() {
    const { card2 } = this.state;
    card2.image_uris.current = card2.image_uris.normal;
    this.setState({
      card2
    });
  }

  showFullArt1() {
    const { card1 } = this.state;
    card1.image_uris.current = card1.image_uris.normal;
    this.setState({
      card1
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
    const { loading, card1, card2 } = this.state;
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              {loading ? (
                <Card>
                  <p>Loading...</p>
                </Card>
              ) : (
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={card1.image_uris.current}
                    alt="Card 1 Image"
                  />
                  <CardBody>
                    <CardTitle>{card1.name}</CardTitle>
                    <Button onClick={this.getCard1}>Card 1</Button>
                  </CardBody>
                </Card>
              )}
              <p>Here will be first card</p>
              <Button onClick={this.showFullArt1}>{card1.name}</Button>
            </Col>
            <Col>
              {loading ? (
                <Card>
                  <p>Loading...</p>
                </Card>
              ) : (
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={card2.image_uris.current}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{card2.name}</CardTitle>
                    <Button onClick={this.getCard2}>Card 2</Button>
                  </CardBody>
                </Card>
              )}
              <p>Here will be second card</p>
              <Button onClick={this.showFullArt2}>{card2.name}</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
