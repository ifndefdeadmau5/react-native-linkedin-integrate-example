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
  View
} from 'react-native';
import LinkedinLogin from './component/LinkedinLogin';

class ReactLinkedin extends Component {
  constructor() {
    super();
    let redirectUrl = 'http://localhost';
    let clientId = '81h6wvg4222q5a';
    let clientSecret = 'lhqlgYaJif41MnqY';
    let state = '';
    let scopes = '';
    
    LinkedinLogin.init();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.SignIn()}>
          Click to login
        </Text>
      </View>
    );
  }

  SignIn() {
    LinkedinLogin.login();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactLinkedin', () => ReactLinkedin);
