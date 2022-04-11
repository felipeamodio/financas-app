// app quando estiver deslogado
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{
                    headerShown: false
                }}
                />

            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFFFFF',
                    headerBackTitleVisible: false,
                    headerTitle: ''
                }}
                />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;