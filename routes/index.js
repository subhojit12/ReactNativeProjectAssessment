import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import Scanner from '../components/Scanner';


const Route = createStackNavigator(
    {
        Login:{
            screen:Login,
            navigationOptions:{
                header:null
            },
        },
        Scanner:Scanner
    },
    {
        initialRouteName:'Login'
    }
)

const RouterConfig = createAppContainer(Route);

export default RouterConfig;