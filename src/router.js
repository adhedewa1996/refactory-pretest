import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Unauth from './navigation/unauth'
import Auth from './navigation/auth'

export const AppStack = (loggedIn = false) => {
    return createAppContainer(createSwitchNavigator (
        {   
            SignedOut: {
                screen: Unauth
            },
            SignedIn: {
                screen: Auth
            },
        },
        {
            initialRouteName: loggedIn ? "SignedIn" : "SignedOut"
        }
    ));
};