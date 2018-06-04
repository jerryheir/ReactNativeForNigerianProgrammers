import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";
import FirstList from "../Components/FirstList";

export default class FirstTabScreen extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('InnerFirst')
    }
  render() {
    return (
        <FirstList navigation={this.props.navigation} />
    );
  }
}

const styles = StyleSheet.create({

})