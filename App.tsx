import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function App() {
  return (
    <View style={styles.container}>
    
    <View style={styles.line}>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line}>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line}>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={[styles.button,{height: vh(30),width:'100%'}]}>
            <Text>My button</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navbar}></View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
    left: 0,
  },
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
  navbar: {
    position: 'relative',
    width: '100%',
    height: vh(10),
    backgroundColor: 'pink'
  },
});
