import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View, Linking } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import {  NeuButton } from 'react-native-neu-element';


export default props => {

    const openLink = async url => {
        if(await Linking.canOpenURL(url)){
            await Linking.openURL(url);
        }
    }

    return (
        <View style={style.fullView}>
            <View style={style.margin}>
                <NeuButton
                    width={100}
                    height={100}
                    concave
                    onPress={() => openLink('https://www.instagram.com/joao_lim4/')}
                    containerStyle={style.container}
                    color='#eef2f9'
                    borderRadius={10}
                >
                    <View style={style.relative}>
                        <Image source={require('../../../content/assets/insta.png')} style={style.fullImage}/>
                    </View>
                </NeuButton>
            </View>
            <View style={style.margin}>
                <NeuButton
                    width={100}
                    height={100}
                    concave
                    onPress={() => Linking.openURL('tel:31989013076')}
                    containerStyle={style.container}
                    color='#eef2f9'
                    borderRadius={10}
                >
                    <View style={style.relative}>
                        <Image source={require('../../../content/assets/wpp.png')} style={style.fullImage}/>
                    </View>
                </NeuButton>
            </View>
            <View style={style.margin}>
                <NeuButton
                    width={100}
                    height={100}
                    concave
                    onPress={() => openLink('https://github.com/joao-lim4')}
                    containerStyle={style.container}
                    color='#eef2f9'
                    borderRadius={10}
                >
                    <View style={style.relative}>
                        <Image source={require('../../../content/assets/git.png')} style={style.fullImage}/>
                    </View>
                </NeuButton>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    fullView: {
        width: '100%',
        height: '100%',
        position: 'relative',
        paddingVertical: 30,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    relative: {
        width: '80%',
        height: '80%',
        position: 'relative',
    },
    fullImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    margin: {
        marginVertical: 20,
    }
   
})