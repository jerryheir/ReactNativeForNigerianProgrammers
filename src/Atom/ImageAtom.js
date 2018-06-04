import * as React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { ImagePicker } from 'expo'
import { Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import { color } from '../Style/Color'

class ImageAtom extends React.Component {
  state = {
    image: ''
  }

  handleSelection = async () => {
    if (this.props.getValue) {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false
      })

      if (result && !result.cancelled) {
        this.setState({ image: result })
        this.props.getValue(this.state.image)
      }
    }
  }

  render() {
    if (this.props.type === 'business')
      return (
        <View>
          <TouchableOpacity
            onPress={this.handleSelection}
            style={[styles.selfAlign, styles.imgContainer]}
          >
            <View style={styles.iconBackground}>
              <Icon name="shop" type="Entypo" style={this.props.imgStyle} />
            </View>
          </TouchableOpacity>
          <Text style={styles.selfAlign}>Upload logo</Text>
        </View>
      )

    if (this.props.source || this.state.image) {
      return (
        <TouchableOpacity
          onPress={this.handleSelection}
          style={styles.selfAlign}
        >
          <Image
            source={{ uri: this.state.image || this.props.source }}
            style={[styles.imgContainer, this.props.imgStyle]}
          />
          <Text style={styles.selfAlign}>Upload logo</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={this.handleSelection}
          style={styles.selfAlign}
        >
          <View style={[styles.imgContainer, { backgroundColor: '#f6f6f6' }]}>
            <Text style={styles.imgPlaceholderText}>
              {this.props.placeholder &&
                this.props.placeholder.substr(0, 1).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.selfAlign}>Upload logo</Text>
        </TouchableOpacity>
      )
    }
  }
}

export default ImageAtom

const styles = StyleSheet.create({
  selfAlign: {
    alignSelf: 'center'
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 75,
    marginVertical: 16
  },
  iconBackground: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: color.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgPlaceholderText: {
    fontWeight: 'bold',
    fontSize: 20
  }
})
