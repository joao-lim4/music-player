import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { NeuView, NeuButton } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player'
import { RFValue } from "react-native-responsive-fontsize";


export default ({props,playAndPause, nextTrack,previusTrack, paused}) => {

    const [statePaused, setStatePause] = useState({paused: false});
    const {position, duration} = useTrackPlayerProgress();

    useEffect(() => {
        if(paused){
            setStatePause({paused: paused});
        }else{
            setStatePause({paused: paused});
        }
    }, [paused]);

    // const changeTime = time => {
    //    TrackPlayer.seekTo(time);
    // } não funcionou, se voce sabe arrumar me da a call

    const convertTime = (seg) => {

        var resto = seg % (60*60);
        var minutos = Math.floor(seg/60);
        resto %= 60;
        segundos = Math.ceil(resto);

        return `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    }

    return (
        <View >
            <NeuView
                width={((Dimensions.get('window').width - 40) * 100) / 100}
                height={150}
                concave
                color='#eef2f9'
                borderRadius={15}
            >
                <View style={style.relativeView}>
                    <View style={style.progressTrack}>

                        <Slider
                            style={style.slider}
                            minimumValue={0}
                            maximumValue={duration}
                            value={position}
                            thumbTintColor="#000"
                            minimumTrackTintColor="#000000"
                            maximumTrackTintColor="#000000"
                            // onSlidingComplete={changeTime}
                        />
                        <View style={style.tempView}>
                            <Text style={style.textTime}>{convertTime(position)}</Text>
                            <Text style={style.textTime}>{convertTime(duration)}</Text>
                        </View>

                    </View>
                    <View style={style.buttonsView}>
                        <TouchableOpacity onPress={() => previusTrack()} style={style.buttonStyle}>
                            <Icon name="play-back" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => playAndPause()} style={style.buttonStyle}>
                            <Icon name={ statePaused.paused ? 'play' : 'pause'  } size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nextTrack()} style={style.buttonStyle}>
                            <Icon name="play-forward"  size={30}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={style.buttonStyle}>
                            <Icon name="menu" size={35} color="#00000090"/>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </NeuView>
        </View>
    )
}

const style = StyleSheet.create({
    relativeView: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 15,
    },
    progressTrack: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
        // backgroundColor: 'red'
    },
    buttonsView: {
        flex: 1,
        // paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    slider: {
        width: (((Dimensions.get('window').width - 40) * 100) / 100) - 40,
        height: 20,
    },
    tempView:{
        width: (((Dimensions.get('window').width - 40) * 100) / 100) - 40,
        height: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTime: {
        fontSize: RFValue(12),
        fontFamily: 'Poppins',
        color: "#000000"
    }
});