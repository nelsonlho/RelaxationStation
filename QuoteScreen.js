
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Quote from './Quote'
import NextQuote from './NextQuoteButton'

const bgImage = require('./assets/bn.png')
export default class QuoteScreen extends Component {
  render() {
    return(
      <Image source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Quote quoteText={this.props.text} quoteSource={this.props.source}/>
        <NextQuote onPress={this.props.onNextQuotePress} />
      </View>
      </Image>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',    
    height: undefined,
    width: undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
})


