import React, { PureComponent } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from 'react-native'

import SignUpForm from '../Components/SignUpForm'
import { color } from '../Style/Color'

class SignUpScreen extends PureComponent {
    login = () => {
        this.props.navigation.goBack()
    }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <KeyboardAvoidingView behavior={'position'}>
              <SignUpForm onClick={this.login} navigation={this.props.navigation} />
            </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

export default SignUpScreen

const styles = StyleSheet.create({
  personalInfoText: {
    marginTop: '3%',
    color: color.primary,
    textAlign: 'center'
  },
  wrapper: {
    paddingHorizontal: 32
  },
  signUpText: {
    color: color.primary,
    marginTop: 32,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: color.secondary
  }
})
