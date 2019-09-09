import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


interface typeProps {
}

interface typeState {
  count: number
}


class TwoPage extends Component<typeProps, typeState> {

  constructor(props:any) {
    super(props);
    this.state= {
      count:0
    };
  }

  increment() {
    this.setState({
      count:this.state.count+1
    });
  }

  decrement() {
    this.setState({
      count:this.state.count-1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>

        <TouchableOpacity onPress={()=> this.increment()} style={styles.button}>
            <Text>Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.decrement()} style={styles.button}>
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
export default TwoPage;