import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";

export default class ButtonAtom extends React.Component {
  render() {
    return (
        <TouchableOpacity style={ this.props.btnStyle ? this.props.btnStyle: styles.buttonStyle } onPress={this.props.onPress} >
            <Text style={ this.props.btnStyle ? styles.textStyle1: styles.textStyle2 } >{this.props.btnText}</Text>
            <Icon name={this.props.iconName} style={ this.props.btnStyle ? styles.iconStyle1: styles.iconStyle2 } />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    textStyle1: {
        color: color.secondary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textStyle1: {
        color: color.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonStyle: {
        borderRadius: 30,
        height: 50,
        width: '85%',
        marginBottom: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: color.secondary
    },
    iconStyle1: {
        color: color.primary,
        marginLeft: 16
    },
    iconStyle2: {
        color: color.secondary,
        marginLeft: 16
    }
})