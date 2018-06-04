import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import ButtonAtom from "../Atom/ButtonAtom";
import { Icon, Item, Input, Form, Label, Thumbnail } from "native-base";
import { color } from "../Style/Color";

class LoginForm extends React.Component {
    login = () => {
        this.props.navigation.navigate('App')
    }
    register = () => {
        this.props.navigation.navigate('SignUp')
    }
  render() {
    return (
        <View style={{ backgroundColor: 'lightblue', flex: 1 }} >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 350,
            justifyContent: 'center'
          }}
        >
          <Thumbnail source={require('../Images/charity.jpg')} large style={{alignSelf: 'center'}} />
        </LinearGradient>
        <View style={{flex: 1}}>
            <View style={{flex: 1, marginLeft: 0, marginRight: 10, paddingLeft: 0}}>
                <Form style={{marginTop: '30%', marginLeft: 0, marginRight: 10, paddingLeft: 0}}>
                    <Item floatingLabel >
                        <Label style={{color: '#fff'}}>Code Name</Label>
                        <Input style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{color: '#fff'}}>Pass Code</Label>
                        <Input 
                        style={{marginLeft: 0, marginRight: 10, paddingLeft: 0}}
                        secureTextEntry={true}
                        keyboardType='numeric'
                        maxLength={6}
                        />
                    </Item>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end', marginTop:'35%', marginBottom: '10%'}}>
                        <ButtonAtom 
                        btnText="Join Us" 
                        onPress={this.props.onPress} 
                        iconName="md-star"
                        btnStyle={{        
                            borderRadius: 30,
                            height: 50,
                            width: '85%',
                            marginBottom: 30,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: color.secondary,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#c0c0c0'}}
                        />
                        <ButtonAtom btnText="Register First" onPress={this.props.onClick} iconName="md-person" />
                    </View>
                </Form>
            </View>
            
        </View>
        </View>
    );
  }
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
