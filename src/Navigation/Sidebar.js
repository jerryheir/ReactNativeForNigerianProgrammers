import React, { PureComponent } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Icon } from 'native-base'
import { color } from '../Style/Color'

class SideBar extends PureComponent {
  handleNavigation = (location, data) => {
    this.props.navigation.navigate(location, { data })
  }

  render() {
    return (
      <SafeAreaView
        style={styles.sidebarContainer}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <TouchableOpacity
          style={styles.logoutItem}
          activeOpacity={1}
          onPress={() => this.handleNavigation('Auth')}
        >
          <Icon
            name={'logout'}
            style={styles.itemIcon}
            type={'MaterialCommunityIcons'}
          />
          <Text style={styles.itemText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default SideBar

const styles = StyleSheet.create({
  itemText: {
    flex: 1,
    alignContent: 'center',
    paddingLeft: 12,
    color: color.menu
  },
  itemIcon: {
    color: color.menu
  },
  logoutItem: {
    borderTopWidth: 1,
    borderColor: color.textBorderBottom,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  sidebarItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16
  },
  sidebarContainer: {
    paddingHorizontal: 8,
    height: Dimensions.get('window').height - 16
  },
  itemsContainer: {
    flex: 4
  }
})
