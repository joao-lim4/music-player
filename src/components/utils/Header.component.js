import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NeuView, NeuButton } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export default ({props,openModalDescribe, openConfig}) => {
    return (
        <React.Fragment>
            <NeuView
                width={80}
                height={80}
                concave
                containerStyle={style.containerBoxPerfil}
                color='#eef2f9'
                borderRadius={40}
            >   
                <TouchableOpacity onPress={() => openModalDescribe()} style={style.buttonFull}>
                    <Image source={require('../../content/assets/lima.jpg')} style={style.fullImage}/>
                </TouchableOpacity>
            </NeuView>

            <Text style={style.textTitle}>Escute agora</Text>

            <NeuButton
                width={50}
                height={50}
                concave
                onPress={() => openConfig()}
                containerStyle={style.containerBoxPerfil}
                color='#eef2f9'
                borderRadius={25}
            >
                <Icon  name="cog" size={30} color="#494949"/>
            </NeuButton>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    containerBoxPerfil: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonFull: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2
    },
    fullImage: {
        width:70,
        height: 70,
        borderRadius: 70 / 2 ,
        // marginTop: 3,
        // marginLeft: 3,
        resizeMode: 'cover'
    },
    textTitle: {
        fontSize: RFValue(20),
        fontFamily: 'Poppins',
        color: '#49494970',
        marginLeft: -10,
    }
});