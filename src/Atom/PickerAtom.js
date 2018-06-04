import * as React from 'react'
import { Picker, Icon } from 'native-base'

class PickerAtom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
  }
  handleChange(value) {
    this.setState({
      selected: value
    })
  }

  render() {
    let list = this.props.list
    return (
      <Picker
        iosHeader="Select one"
        mode="dropdown"
        iosIcon={<Icon name="ios-arrow-down-outline" />}
        style={this.props.style}
        selectedValue={this.state.selected}
        onValueChange={this.handleChange.bind(this)}
      >
        {list.map((element, key) => (
          <Picker.Item label={element} value={element} key={key} />
        ))}
      </Picker>
    )
  }
}

export default PickerAtom
