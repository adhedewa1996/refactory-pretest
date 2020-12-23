import { createStackNavigator  } from 'react-navigation-stack'
import { Login, Register } from '../components'

const Unauth = createStackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    }
})

export default Unauth