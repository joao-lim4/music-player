import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Style from '../content/css/Index.style';
import HeaderComponent from './utils/Header.component';
import BodyComponent from './utils/Body.component';
import ControlsComponent from './utils/Painel.component';
import TrackPlayer from 'react-native-track-player';
import Data from '../data/Data';
import ModalPerfil from './utils/ModalPerfil.component';
import ModalConfig from './utils/ModalConfig.component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default props => {
    
    const data = Data.musicasList.musicasLima;
    const [paused, setPaused] = useState({paused: true});
    const [objectSong, setObjectSong] = useState(null);
    const [indexQueue, setIndexQueue] = useState(0);
    const [modals, setModals] = useState({
        perfil: false,
        config: false
    });
    const [configs, setCofigs] = useState({
        listMusic: null
    });

    const setPlayerStateInit = () => {
        setTimeout(async () => {
            let idTrack = await TrackPlayer.getCurrentTrack();
            for(let i = 0; i < data.length; i++){
                if(data[i].id == idTrack){
                    setObjectSong(data[i]);
                    setIndexQueue(i);
                    break;
                }
            }
        }, 1000);
    }

    const setOptionsConfig = async () => {

        let list = await AsyncStorage.getItem('listMusic')
        if(list == null){
            AsyncStorage.setItem('listMusic', JSON.stringify(true)).then(() => {
                setCofigs({listMusic: true});
            });
        }else{
            setCofigs({listMusic: JSON.parse(list)});
        }

    }

    const setStatePlayer = async () => {
        let state = await TrackPlayer.getState();
        if(state === TrackPlayer.STATE_PLAYING){
            setPaused({paused: false });
        }
    }

    useFocusEffect(
        useCallback(() => {

            setPlayerStateInit();
            setOptionsConfig();
            setStatePlayer();
           
    
            TrackPlayer.addEventListener('playback-track-changed', async trackInfo => {
                if(trackInfo.nextTrack !== null && trackInfo.track !== null){
                    let queueLen = (await TrackPlayer.getQueue()).length;
                    if(queueLen > indexQueue + 1){  
                        for(let i = 0; i < data.length; i++){
                            if(data[i].id == trackInfo.nextTrack){
                                setObjectSong(data[i]);
                                setIndexQueue(i);
                                break;
                            }
                        }
                    };
                }
            });
    
            TrackPlayer.addEventListener('remote-pause', async () => {
                setPaused({paused: true });
            });
            
            TrackPlayer.addEventListener('remote-play', async () => {
                setPaused({paused: false }); 
            });
        }, [])
    );

  


    const pauseAndPlay = async () => {
        let state = await TrackPlayer.getState();
        if(state === TrackPlayer.STATE_PLAYING){
            await TrackPlayer.pause();
            setPaused({paused: true });
        }else{
            await TrackPlayer.play();
            setPaused({paused: false });
        }
    }


    const nextTrack = async () => {
        let state = await TrackPlayer.getState();
        let queueLen = (await TrackPlayer.getQueue()).length;
        if(queueLen > indexQueue + 1){
            await TrackPlayer.skipToNext();
            state === TrackPlayer.STATE_PLAYING ?  false : (async () => { await TrackPlayer.play();setPaused({paused: false})})();
        };
    }

    const previusTrack = async () => {
        let state = await TrackPlayer.getState();
        if(indexQueue - 1 > -1){
            await TrackPlayer.skipToPrevious();
            state === TrackPlayer.STATE_PLAYING ?  false : (async () => { await TrackPlayer.play();setPaused({paused: false})})();
        }
    }

    const updaTeModal = async (key) => {
        let cl = {...modals};
        cl[key] = !cl[key];
        setModals(cl);
    }

    const defineListMusic = async () => {
        let storage = await AsyncStorage.getItem('listMusic');
        if(storage != null){
            AsyncStorage.setItem('listMusic', JSON.stringify(JSON.parse(storage) == true ? false : true)).then(() => {
                setCofigs({listMusic: (JSON.parse(storage) == true ? false : true)});
            });
        }else{
            AsyncStorage.setItem('listMusic', JSON.stringify(!configs.listMusic)).then(() => {
                setCofigs({listMusic: !configs.listMusic});
            });
        }
    }

    return (
        <View style={Style.viewMain}>
            <ModalPerfil show={modals.perfil} close={() => updaTeModal('perfil')}/>
            <ModalConfig show={modals.config} close={() => updaTeModal('config')} listMusic={configs.listMusic} setListMusics={() => defineListMusic()}/>
            <View style={Style.margins}>
                <View style={Style.headerMainView}>
                    <HeaderComponent props={{...props}} openConfig={() => updaTeModal('config')} openModalDescribe={() => updaTeModal('perfil')}/>
                </View>
                <View style={Style.bodyMainView}>
                    <BodyComponent objectSong={objectSong} playIng={paused.paused} props={{...props}}/>
                </View>
                <View style={Style.controlsMainView}>
                    <ControlsComponent playAndPause={() => pauseAndPlay()} nextTrack={() => nextTrack()}  previusTrack={() => previusTrack()} listMusic={configs.listMusic}  paused={paused.paused}/>
                </View>
            </View>
        </View>
    )
}