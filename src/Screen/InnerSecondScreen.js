import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Icon } from "native-base";
import { color } from "../Style/Color";

export default class InnerSecondScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>You Clicked the Man driving a motorcycle</Text>
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
