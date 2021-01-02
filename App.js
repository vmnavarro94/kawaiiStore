import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Products, Modal } from './screens'

const AppNavigator = createStackNavigator({
  Products: {
    screen: Products,
  }
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal,
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)

