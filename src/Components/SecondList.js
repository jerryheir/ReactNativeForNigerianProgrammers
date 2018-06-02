import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";
import FirstList from "../Components/FirstList";
import LottieAnimation from 'easy-lottie-react-native';

export default class SecondList extends React.Component {
    onPress = () => {
        this.props.navigation.navigate('InnerSecond')
    } 
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
            <LottieAnimation 
                source={require('../Images/motorcycle.json')} 
                style={styles.animate}
                loop={true}
            />

       </TouchableOpacity> 
    );
  }
}

const styles = StyleSheet.create({
    animate: {
        width: 300
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})