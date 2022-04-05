// rotas quando estiver logado
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    )
}

export default AppRoutes;