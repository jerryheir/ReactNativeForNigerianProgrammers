import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";
import FirstList from "../Components/FirstList";

export default class FirstTabScreen extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('InnerFirst', { item: 'Nigerian Developer 02-06-2018' })
    }  
  render() {
    return (
        <FirstList onPress={this.onPress} />
    );
  }
}

const styles = StyleSheet.create({

})