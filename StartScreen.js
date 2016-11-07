/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

export default class StartScreen extends Component {
  render() {
    return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
                <Image source={zenImage} style={styles.buttonImage} />
                <Text style={styles.readyText}>I am ready to relax</Text> 
              </TouchableOpacity>
            </View>
    )
  }
}



const zenImage = require('./assets/zen.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889da9',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#889da9',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20, 
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
});


