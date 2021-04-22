import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, View, Dimensions, Animated } from 'react-native';
import { NeuView, NeuButton } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export default ({props, songsLoad, objectSong}) => {


    const [DataSong, setDataSong] = useState(null);

    useEffect(() => {
        if(objectSong !== null){
            setDataSong(objectSong);
        }
    }, [objectSong]);


    return (
        <View style={style.fullView}>
            
            <NeuView
                width={((Dimensions.get('window').width - 40) * 64) / 100}
                style={style.maxDimensions}
                height={((Dimensions.get('window').width - 40) * 64) / 100}
                concave
                containerStyle={style.containerBoxPerfil}
                color='#eef2f9'
                borderRadius={125}
            >   
                {DataSong !== null ? (
                    <Image source={DataSong.artwork} style={style.fullImage}/>
                ) : false
                }
            </NeuView>

            <View style={style.nameView}>
                {DataSong !== null ? (
                    <React.Fragment>
                        <Text style={style.nameAutor}>{DataSong.artist}</Text>
                        <Text style={style.nameTrack}>{DataSong.title}</Text>
                    </React.Fragment>
                ) : false

                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    fullView: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBoxPerfil: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    maxDimensions: {
        maxHeight: 250,
        maxWidth: 250,
    },
    fullImage: {
        width: (((Dimensions.get('window').width - 40) * 64) / 100) - 20,
        height: (((Dimensions.get('window').width - 40) * 64) / 100) - 20,
        borderRadius: 125,
    },
    nameView: {
        width: '100%',
        position: 'relative',
        marginVertical: 20,
    },
    nameTrack: {
        fontSize: RFValue(20),
        width: (((Dimensions.get('window').width - 40) * 100) / 100),
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        color: '#00000070',
        letterSpacing: 1
    },
    nameAutor: {
        fontSize: RFValue(23),
        width: (((Dimensions.get('window').width - 40) * 100) / 100),
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: '#00000090',
        letterSpacing: 1
    }
});