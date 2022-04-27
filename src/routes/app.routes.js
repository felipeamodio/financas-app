// rotas quando estiver logado
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import New from '../screens/New';
import Profile from '../screens/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#171717',
                },
                drawerLabelStyle: {
                    fontWeight: 'bold'
                },
                drawerActiveBackgroundColor: '#00B94A',
                drawerActiveTintColor: '#FFFFFF',
                drawerInactiveBackgroundColor: '#000000',
                drawerInactiveTintColor: '#DDDDDD',
                drawerItemStyle: {
                    marginVertical: 5
                }
            }}
        >
            <AppDrawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }} />

            <AppDrawer.Screen 
                name="Registrar" 
                component={New} 
                options={{
                    headerShown: false
                }} />

            <AppDrawer.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    headerShown: false
                }} />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;