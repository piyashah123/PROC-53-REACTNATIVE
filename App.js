import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class RedButton extends Component{
  render() {
    return(
              <Button title="clickme"color="red"></Button>

    )
  }
}


export default class App extends Component {
  render() {
    return (
        <View style={{marginTop:200}}>
        <Text style={{marginTop:50}}>My first App</Text>
         <RedButton/>
        </View>
    );
  }
}