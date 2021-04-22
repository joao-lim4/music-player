import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack/Stack';
import UserContext from '../contexts/UserContext';



export default props => {

 

    return (
        <UserContext>
            <NavigationContainer>
                <StatusBar backgroundColor="#eef2f9" barStyle="dark-content"/>
                <Stack />
            </NavigationContainer>
        </UserContext>
    )
}

