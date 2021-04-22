import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import Style from '../content/css/Index.style';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from './utils/Header.component';
import BodyComponent from './utils/Body.component';
import ControlsComponent from './utils/Painel.component';
import TrackPlayer from 'react-native-track-player';
import Data from '../data/Data';
import TrackPlayerOptions from './utils/TrackPlayerOptions';
import Modal from './utils/Modal.component';

export default props => {
    
    const data = Data.musicasList.musicasLima;
    const [paused, setPaused] = useState({paused: true});
    const [objectSong, setObjectSong] = useState(null);
    const [indexQueue, setIndexQueue] = useState(0);
    const [modal, setModal] = useState({active: false});


    const setPlayerStateInit = async () => {
        let idTrack = await TrackPlayer.getCurrentTrack();

        for(let i = 0; i < data.length; i++){
            if(data[i].id == idTrack){
                setObjectSong(data[i]);
                setIndexQueue(i);
                break;
            }
        }
    }

    useEffect(() => {
        TrackPlayer.setupPlayer({
            waitForBuffer: true,
            
        }).then(async () => {
            await TrackPlayer.reset();
            await TrackPlayer.add(data);
            setPlayerStateInit()
            

            TrackPlayer.updateOptions(TrackPlayerOptions);
        });
        
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


        return () => {
            TrackPlayer.destroy();
        }
    }, []);


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


    return (
        <View style={Style.viewMain}>
            <Modal show={modal.active} close={() => setModal({active: false})}/>
            <View style={Style.margins}>
                <View style={Style.headerMainView}>
                    <HeaderComponent props={{...props}} openModalDescribe={() => setModal({active: true})}/>
                </View>
                <View style={Style.bodyMainView}>
                    <BodyComponent objectSong={objectSong} />
                </View>
                <View style={Style.controlsMainView}>
                    <ControlsComponent playAndPause={() => pauseAndPlay()} nextTrack={() => nextTrack()}  previusTrack={() => previusTrack()}  paused={paused.paused}/>
                </View>
            </View>
        </View>
    )
}