import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { NeuView, NeuButton } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export default ({props,openModalDescribe}) => {
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
                <Image source={require('../../content/assets/lima.jpg')} style={style.fullImage}/>
            </NeuView>

            <Text style={style.textTitle}>Escute agora</Text>

            <NeuButton
                width={50}
                height={50}
                concave
                onPress={() => openModalDescribe()}
                containerStyle={style.containerBoxPerfil}
                color='#eef2f9'
                borderRadius={25}
            >
                <Icon  name="help-outline" size={30} color="#494949"/>
            </NeuButton>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    containerBoxPerfil: {
        justifyContent: 'center',
        alignItems: 'center'
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