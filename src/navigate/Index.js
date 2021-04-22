import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack/Stack';
import UserContext from '../contexts/UserContext';
import TrackPlayer from 'react-native-track-player';
import Data from '../data/Data';
import TrackPlayerOptions from '../components/utils/TrackPlayerOptions';

export default props => {

    const data = Data.musicasList.musicasLima;

    useEffect(() => {

        TrackPlayer.setupPlayer({
            waitForBuffer: true,
            
        }).then(async () => {
            // await TrackPlayer.reset();
            await TrackPlayer.add(data);
           
            TrackPlayer.updateOptions(TrackPlayerOptions);
        });

        return () => {
            TrackPlayer.destroy();
        }
    },[]);
   

 

    return (
        <UserContext>
            <NavigationContainer>
                <StatusBar backgroundColor="#eef2f9" barStyle="dark-content"/>
                <Stack />
            </NavigationContainer>
        </UserContext>
    )
}

