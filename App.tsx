import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';
import dataTest from './store/dataTest';

import NavigationButton from './components/navigationButton';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typeButton1: null,
      typeButton2: null,
      stateNavigation: true,
    };
  }

  componentWillReceiveProps(nextProps) {

  }
  
  render() {
    var displayNavigation = function() {
      if (this.state.stateNavigation) {
        return (
          <View>
            <NavigationButton button1={dataTest.navigation.button1} button2={dataTest.navigation.button2} />
            <NavigationButton button1={dataTest.navigation.button4} button2={dataTest.navigation.button3} />
            <NavigationButton button1={dataTest.navigation.button1} button2={dataTest.navigation.button2} />
          </View>
        )
      } else {
        return null
      }
    }.bind(this)

    return (
      <View style={styles.container}>
        {displayNavigation()}
        <View style={styles.navbar}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
    left: 0,
  },
  navbar: {
    position: 'relative',
    width: '100%',
    height: vh(10),
    backgroundColor: 'pink'
  },
});
