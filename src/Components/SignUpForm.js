import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Item, Input, Form, Label } from "native-base";

export default class SignUpForm extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'lightblue', flex: 1 }} />
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
            <Text> Oh Happy Day!!! </Text>
        </LinearGradient>
        <View>
            <View>
            <Form>
                <Item floatingLabel>
                    <Label>Code Name</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Pass Code</Label>
                    <Input />
                </Item>
          </Form>
            </View>
            <TouchableOpacity>
                <Text>Join Us</Text> <Icon />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Register First</Text> <Icon />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
