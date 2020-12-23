import { createStackNavigator  } from 'react-navigation-stack'
import { Home } from '../components'

const Auth = createStackNavigator ({
    MyHome: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
})

export default Auth