import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";
import { data } from "../Atom/FirstListAtom";

export default class InnerFirstScreen extends React.Component {
  render() {
    const name = this.props.navigation.getParam('item', 'Oga Error')
    return (
        <View style={styles.container}>
            <Text>You Clicked {name} {data}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})