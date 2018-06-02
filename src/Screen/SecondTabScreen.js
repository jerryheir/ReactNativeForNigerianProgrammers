import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";
import SecondList from "../Components/SecondList";

export default class SecondTabScreen extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('InnerSecond')
    } 
  render() {
    return (
        <SecondList onPress={this.onPress}/>
    );
  }
}

const styles = StyleSheet.create({
    
})