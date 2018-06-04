import React from 'react'
import { FlatList, ScrollView, View, Text } from "react-native";
import FirstListAtom from "../Atom/FirstListAtom";
import { products } from "../config/default";

export default class FirstList extends React.Component {
    onPress = ( data ) => {
        this.props.navigation.navigate('InnerFirst', { item: data })
    }
    renderItem = ({ item }) => {
        return <FirstListAtom items={item} navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('InnerFirst', { item: item.name })} />
    }
  render() {
    return (
        <View>
            <View style={{height: 40, width: '100%', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: 'darkgrey', fontWeight: 'bold'}}>Skills We Have</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={products}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.key.toString()}
                    style={{marginBottom: 50}}
                />
            </ScrollView>
        </View>
    );
  }
}