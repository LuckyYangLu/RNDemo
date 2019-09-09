import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


interface typeState {
  count: string,
  increment: string,
  decrement: string
};


class FisrtPage extends Component<typeProps, typeState> {

  render() {

    const { count, increment, decrement } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>

        <TouchableOpacity onPress={increment} style={styles.button}>
            <Text>Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text>Down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4ec300',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:50,
        color:'#fff'
    },
    button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default FisrtPage;