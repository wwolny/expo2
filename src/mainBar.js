import React from 'react';
import firebase from 'firebase';
import {
  TabNavigator,
  StackNavigator,
  addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import MainPropScreen from './src/screens/MainPropScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CategoryPropScreen from './src/screens/CategoryPropScreen';
import PlaceScreen from './src/screens/PlaceScreen';
import MyAccScreen from './src/screens/MyAccScreen';

export default class MainBar extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD5aHdi4pzlcF2HPEKHDul7Hek8h2j8UJ4',
      authDomain: 'expoone-62e50.firebaseapp.com',
      databaseURL: 'https://expoone-62e50.firebaseio.com',
      projectId: 'expoone-62e50',
      storageBucket: 'expoone-62e50.appspot.com',
      messagingSenderId: '98374872463'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          mainProp: {
            screen: StackNavigator({
              mainProp: { screen: MainPropScreen },
              place: { screen: PlaceScreen }
            })
          },
          category: {
            screen: StackNavigator({
              category: { screen: CategoryScreen },
              categoryProp: { screen: CategoryPropScreen },
              place: { screen: PlaceScreen }
            })
          },
          myAcc: { screen: MyAccScreen }
        }, {
          tabBarPosition: 'bottom',
          lazy: true,
          swipeEnabled: true
        }),
        navigationOptions: () => ({
          header: null
        })
      }
    }, {
      navigationOptions: {
          tabBarVisible: false
      },
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false
    });

    return (
        <MainNavigator />
    );
  }
}
/*
const mapStateToProps = (state) => {
  return { navigationState: state.mainBar }
}*/
