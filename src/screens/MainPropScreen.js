import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection, Button } from '../common';
import { ListOfPropositions } from '../components/ListOfPropositions';

export default class MainPropScreen extends Component {
  static navigationOptions = {
    header: null
  }

  LogOut() {
    firebase.auth().signOut();
    this.props.navigation.navigate('welcome');
  }

  render() {
    return (
      <View>
        <HeaderSection headerText='MainPropScreen' />
        <Card>
          <CardSection>
            <Button onPress={this.LogOut.bind(this)}>
              Wyloguj!
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
