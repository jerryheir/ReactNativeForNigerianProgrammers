import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon, ListItem, Left, Body, Right } from "native-base";
import { color } from "../Style/Color";
import LottieAnimation from 'easy-lottie-react-native';

export default class FirstListAtom extends React.Component {
  render() {
    return (
        <ListItem onPress={this.props.onPress} style={styles.listItem} >
            <Left>
                <LottieAnimation 
                    source={require('../Images/checked_done_.json')} 
                    style={styles.animation}
                    loop={true}
                />
            </Left>
            <Body style={styles.body}><Text style={styles.texty}>{this.props.items.name}</Text></Body>
            <Right>
                <LottieAnimation 
                    source={require('../Images/favourite_app_icon.json')} 
                    style={styles.anime}
                />
            </Right>
        </ListItem>
    );
  }
}

const styles = StyleSheet.create({
    animation: {
      width: 50,
    },
    anime: {
      width: 50,
    },
    body: {
        flex: 2
    },
    texty: {
        fontSize: 18
    },
    listItem: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginLeft: 0,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    }
});