import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import LoginForm from '../Components/LoginForm'
import { color } from '../Style/Color'

class LoginScreen extends React.Component {
    login = () => {
        this.props.navigation.navigate('App')
    }
    register = () => {
        this.props.navigation.navigate('SignUp')
    }
  render() {
    return (
        <LoginForm onPress={this.login} onClick={this.register} />
    )
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary
  },
  signUpText: {
    color: color.primary,
    marginTop: 32,
    alignSelf: 'center'
  },
  wrapper: {
    paddingHorizontal: 32
  }
})