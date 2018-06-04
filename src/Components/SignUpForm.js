import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Item, Input, Form, Label } from "native-base";
import ImageAtom from "../Atom/ImageAtom";
import PickerAtom from '../Atom/PickerAtom';
import ButtonAtom from '../Atom/ButtonAtom';
import { color } from '../Style/Color';

export default class SignUpForm extends React.Component {
    state = {
        image: '',
      };
    
      signup = () => {
        console.log(
          this.state.image,
        );
      };
    
      getImage = (pic) => {
        this.setState({ image: pic });
      };
    
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#fff', flex: 1 }} />
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
        </LinearGradient>
        <View>
            <View style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}}>
            <Form style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}}>
                <Item style={{justifyContent: 'center', marginTop: 30}}>
                    <ImageAtom 
                        getValue={this.getImage}
                        source={this.state.image}
                        placeholder=""
                        imgStyle={styles.placeholderIcon}
                        type="business"
                    />
                </Item>
                <Item floatingLabel >
                    <Label style={{color: '#c0c0c0'}}>Code Name</Label>
                    <Input style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}} />
                </Item>
                <Item floatingLabel>
                    <Label style={{color: '#c0c0c0'}}>Pass Code</Label>
                    <Input 
                        style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}}
                        secureTextEntry={true}
                        keyboardType='numeric'
                        maxLength={6}
                    />
                </Item>
                <Item style={{marginTop: 15, marginBottom: 15}}>
                    <PickerAtom 
                    list={["Male", "Female"]}
                    />
                </Item>
          </Form>
            </View>
            <ButtonAtom 
                btnText="REGISTER" 
                onPress={this.props.onClick} 
                iconName="md-person" 
            />
            <Text style={{color: '#c0c0c0', fontSize: 10, textAlign: 'center'}}>Have you already registered? You can LOGIN</Text>
            <ButtonAtom 
                btnText="LOGIN" 
                onPress={this.props.onClick} 
            />
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
  placeholderColor: {
    color: color.inactive
  },
  placeholderIcon: {
    color: color.inactive,
    fontSize: 120
  }
});
