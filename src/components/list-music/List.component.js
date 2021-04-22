import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Style from '../../content/css/List.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../../data/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MusicComponent from './utils/Music.component'; 
import TrackPlayer from 'react-native-track-player';
import { NeuSpinner } from 'react-native-neu-element';

export default props => {

    const navigation = useNavigation();
    const data = Data.musicasList.musicasLima;
    const [load, setLoad] = useState({active: true});
    const [listSongs, setListSongs] = useState([]);
    

    const loadList = async () => {
        let listStorage = await AsyncStorage.getItem('songs');
        if(listStorage == null){
            setListSongs(data);
        }else{
            setListSongs(JSON.parse(listSongs));
        }
       
    }
    
    useEffect(() => {
        loadList();
    }, []);

    const play = async (song) => {
    
        let state = await TrackPlayer.getState();
        if(state === TrackPlayer.STATE_PLAYING){
            await TrackPlayer.skip(song.id);
            navigation.goBack();
        }else{
            await TrackPlayer.skip(song.id);
            await TrackPlayer.play();
            navigation.goBack();
        }
    }

    return (
        <View style={Style.viewMain}>
            <View style={Style.margins}>
                <View style={Style.headerView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={Style.buttonVoltar}>
                        <Icon name="arrow-back" size={25} color="#494949"/>
                    </TouchableOpacity>
                    <Text style={Style.textTitle}>Lista</Text>
                </View>
                <View style={Style.bodyViews}>

                    {!listSongs.length ? (
                        <View style={Style.viewLoad}>
                            <NeuSpinner
                                color='#eef2f9'
                                size={80}
                                indicatorColor='#494949' // Mint
                            />
                        </View>
                    ) : (
                        <ScrollView showsVerticalScrollIndicator={false} style={Style.scroll}>
                            {listSongs.length ? listSongs.map((v,i) => {
                                return (
                                    <MusicComponent songObject={v} key={i} play={(song) => play(song)}/>
                                )
                            }) : false

                            }
                        </ScrollView>
                    ) 
                    }
                </View>
            </View>
        </View>
    )
}