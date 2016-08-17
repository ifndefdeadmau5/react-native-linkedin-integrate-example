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
  Image,
  View
} from 'react-native';
import LinkedinLogin from './component/LinkedinLogin';
class ImageView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Image source={{uri: this.props.source }}
               style={{width: 400, height: 400}} />
    );
  }
}
class ReactLinkedin extends Component {
  constructor(props) {
    console.log('will start this');
    super(props);

    this.state = {
      profile: {},
      profileImageUrl: ''
    };

    let redirectUrl = 'http://localhost';
    let clientId = '81h6wvg4222q5a';
    let clientSecret = 'lhqlgYaJif41MnqY';
    let state = 'DCEeFWf45A53sdfKef424';
    let scopes = ['r_basicprofile'];

    LinkedinLogin.init(redirectUrl, clientId, clientSecret, state, scopes);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.SignIn()}>
          Click to login
        </Text>
        <Text style={styles.instructions} onPress={() => this.Logout()}>
          Click to logout
        </Text>
        <Text style={styles.instructions} onPress={() => this.getProfile()}>
          Click to get profile image
        </Text>
        <Text style={styles.instructions}>
          {this.state.profile.emailAddress}
        </Text>
        <Text style={styles.instructions}>
          {this.state.profile.firstname}
        </Text>
        <Text style={styles.instructions}>
          {this.state.profile.industry}
        </Text>
        <Text style={styles.instructions}>
          {this.state.profile.lastName}
        </Text>
        {/*<Image source={{uri: this.state.profileImageUrl }}*/}
               {/*style={{width: 400, height: 400}} />*/}

        {/*<Image source={{uri: 'https://media.licdn.com/mpr/mprx/0_07OU4rIxABIbT42HsQGymZnVhUFI5ZSSePG4HmEMhnIwqN3wDWGjeZwpTsbwq4ukdYi4IpoptxIw9Wp3IX7qfIExLxII9WreeX7Msrn0K5sG9OT3e8xZpG9Wo1'}}*/}
               {/*style={{width: 400, height: 400}} />*/}
      </View>
    );
  }

  SignIn() {
    LinkedinLogin.login();
  }
  Logout() {
    LinkedinLogin.logout();
  }
  getProfileImage( ) {
    LinkedinLogin.getProfileImages().then(
        (data) => {
          this.setState({
            profileImageUrl: data
          });
        }, error => {
          console.log( error );
        }
    );
  }

  getProfile( ) {
    LinkedinLogin.getProfile().then(
        (data) => {
          this.setState({
            profile : data
          });
        }, error => {
          console.log( error );
        }
    );
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
