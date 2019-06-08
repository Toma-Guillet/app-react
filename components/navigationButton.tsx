import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

interface dataProps {
  button1: number;
  button2: number;
}
interface dataState {
  typeButton1: string;
  typeButton2: string;
  stateButton1: boolean;
}

export default class NavigationButton extends React.Component<dataProps,dataState> {
  constructor(props){
    super(props);
    this.state = {
      typeButton1: null,
      typeButton2: null,
      stateButton1: true,
    };
  }

  async componentDidMount() {
    this.setButton(this.props.button1,1);
    this.setButton(this.props.button2,2);
  }


  setButton(content,type){
    let typeButton;
    if(content == 1){
      typeButton = 'Button 1';
    }else if(content == 2){
      typeButton = 'Button 2';
    }else if(content == 3){
      typeButton = 'Button 3';
    }else if(content == 4){
      typeButton = 'Button 4';
    }

    if(type == 1){
      this.setState({ typeButton1: typeButton });
    }else{
      this.setState({ typeButton2: typeButton });
    }
  }

  switchStatus(i){
    if(i){
      this.setState({ stateButton1: false });
    }else{
      this.setState({ stateButton1: true });
    }  
  }

  render() {

    var displayButton = function() {
      if (this.state.stateButton1) {
        return (
          <TouchableOpacity onPress={() => this.switchStatus(this.state.stateButton1)} style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>{this.state.typeButton1}</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity onPress={() => this.switchStatus(this.state.stateButton1)} style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>off</Text>
          </TouchableOpacity>
        )
      }
    }.bind(this)

    return (
    <View style={styles.line}>
        <View style={styles.box}>
          {displayButton()}
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>{this.state.typeButton2}</Text>
          </TouchableOpacity>
        </View>
    </View>
    );

  }
}

const styles = StyleSheet.create({
    line: {
      position: 'relative',
      width: '100%',
      flexDirection: 'row',
    },
    box: {
      position: 'relative',
      width: '50%',
      height: vh(30),
      flexDirection: 'row',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: .25,
    },
});
