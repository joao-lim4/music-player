import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, Dimensions } from 'react-native';
import Style from '../../../content/css/List.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { NeuView } from 'react-native-neu-element';




export default ({props, songObject, play}) => {

    
    const convertTime = (seg) => {

        var resto = seg % (60*60);
        var minutos = Math.floor(seg/60);
        resto %= 60;
        segundos = Math.ceil(resto);

        return `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    }


    return (
        <View style={Style.marginBottom}>
            <NeuView
                width={((Dimensions.get('window').width - 40) * 99) / 100}
                height={90}
                style={Style.aling}
                concave
                containerStyle={Style.container}
                color='#eef2f9'
                borderRadius={15}
            >   
                <View style={Style.telative}>
                    <View style={Style.boxArt}>
                        <View style={Style.boxImage}>
                            <Image source={songObject.artwork} style={Style.fullImage}/>
                        </View>
                    </View>
                    <View style={Style.BodyMusic}>
                        <Text style={Style.titleMusica}>{songObject.title}</Text>
                        <Text style={Style.time}>{convertTime(songObject.duration)}</Text>
                    </View>
                    <View style={Style.playView}>
                        <TouchableOpacity onPress={() => play(songObject)} style={Style.buttonPlay}>
                            <Icon name="play" size={20} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </NeuView>
        </View>
    )
}