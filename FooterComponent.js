import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import ButtonComponent from './ButtonComponent';

export default class FooterComponent extends Component {
  render() {
    const {onPress} =this.props;
    return (
      <View style={styles.container}>
           <ButtonComponent title='ADD DATA' onPress={onPress}/>
       
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:10,
       width:360
    }
})

