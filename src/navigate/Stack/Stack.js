import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexView from '../../views/Index.view';
import ListView from '../../views/list.view';

const Stack = createStackNavigator();

export default props => {

    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen options={{ headerShown: false, animationEnabled: true,  }} name="Index" >
                {props => (
                    <IndexView  {...props} />
                )}
            </Stack.Screen>
            <Stack.Screen options={{ headerShown: false, animationEnabled: true,  }} name="List" >
                {props => (
                    <ListView  {...props} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}