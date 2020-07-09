import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import { EndModal } from "../../components"
import Score from './components/Score';
import Card from './components/Card';
import helpers from './utils/helpers';

export class MemoriserGameScreen extends React.Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.resetCards = this.resetCards.bind(this);

    let sources = {
      'fontawesome': FontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons
    };

    let cards = [
      {
        src: 'fontawesome',
        name: 'heart',
        color: 'red'
      },
      {
        src: 'entypo',
        name: 'feather',
        color: '#7d4b12'
      },
      {
        src: 'entypo',
        name: 'flashlight',
        color: '#f7911f'
      },
      {
        src: 'entypo',
        name: 'flower',
        color: '#37b24d'
      },
      {
        src: 'entypo',
        name: 'moon',
        color: '#ffd43b'
      },
      {
        src: 'entypo',
        name: 'youtube',
        color: '#FF0000'
      },
      {
        src: 'entypo',
        name: 'shop',
        color: '#5f5f5f'
      },
      {
        src: 'fontawesome',
        name: 'github',
        color: '#24292e'
      },
      {
        src: 'fontawesome',
        name: 'skype',
        color: '#1686D9'
      },
      {
        src: 'fontawesome',
        name: 'send',
        color: '#1c7cd6'
      },
      {
        src: 'ionicons',
        name: 'ios-magnet',
        color: '#d61c1c'
      },
      {
        src: 'ionicons',
        name: 'logo-facebook',
        color: '#3C5B9B'
      }
    ];

    let clone = JSON.parse(JSON.stringify(cards));

    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      obj.id = Math.random().toString(36).substring(7);
      obj.src = sources[obj.src];
      obj.is_open = false;
    });

    this.cards = this.cards.shuffle();
    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards,
      modal: false,
      win: true
    }

  }



  resetCards() {
    let cards = this.cards.map((obj) => {
      obj.is_open = false;
      return obj;
    });

    cards = cards.shuffle();

    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0,
      modal: false
    });
  }


  renderRows() {
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          { this.renderCards(cards) }
        </View>
      );
    });

  }


  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          src={card.src}
          name={card.name}
          color={card.color}
          is_open={card.is_open}
          clickCard={this.clickCard.bind(this, card.id)}
        />
      );
    });
  }


  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let score = this.state.score;

    let index = this.state.cards.findIndex((card) => {
      return card.id === id;
    });

    let cards = this.state.cards;

    if(cards[index].is_open === false && selected_pairs.indexOf(cards[index].name) === -1){
      cards[index].is_open = true;
      current_selection.push({
        index: index,
        name: cards[index].name
      });

      if(current_selection.length === 2){
        if(current_selection[0].name === current_selection[1].name){
          score += 1;
          selected_pairs.push(cards[index].name);
        }else{
          cards[current_selection[0].index].is_open = false;
          setTimeout(() => {
            cards[index].is_open = false;
            this.setState({
              cards: cards
            });
          }, 500);
        }
        current_selection = [];
      }
      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection
      });
    }
    if(score === 12) {
      this.setState({
        ...this.state,
        modal: true,
        win: true
      });
    }
  }

  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if(count === 4){
        contents_r.push(contents);
        count = 0;
        contents = [];
      }
    });
    return contents_r;
  }

  componentDidMount() {
     setTimeout(() => { this.setState({ ...this.state, modal: true }) }, 60000)
  }



  render() {
    return (
      <View style={styles.container}>
        <Score score={this.state.score} />

        <View style={styles.body}>
          {
            this.renderRows.call(this)
          }
        </View>


        <EndModal
         visible={this.state.modal}
         close={this.resetCards}
         points={this.state.score}
         navigation={this.props.navigation}
         win={this.state.win}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 13,
    justifyContent: 'space-between',
    padding: 10,
    marginTop:10
  },

});