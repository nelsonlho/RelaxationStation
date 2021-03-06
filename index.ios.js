/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'
import { apiURL, key } from './secrets'
const { quotes } = require('./quotes.json')

export default class RelaxationStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      source: '',
    }
    this._callAPI = this._callAPI.bind(this)
  }

  componentDidMount() {
    this._callAPI()
  }

  _callAPI() {

    fetch(apiURL, {
      method: 'POST',
      headers: {
        'X-Mashape-Key': key,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData)
      this.setState({
        text: resData.quote,
        source: resData.author,
      })
    }).done();
  }

  render() {
    
    return (
      <Navigator 
        initialRoute={{ name: 'StartScreen' }}
        renderScene={(route, navigator) => {
            switch (route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })} />
            case 'QuoteScreen':
              return <QuoteScreen text={this.state.text} source={this.state.source}onNextQuotePress={this._callAPI} />
            }
          }}
        />
      )
  }
}

const zenImage = require('./assets/zen.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303838',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,   
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
});



AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
