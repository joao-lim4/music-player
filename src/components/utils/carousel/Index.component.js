import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";


export default props => {
    return (
        <View style={style.fullView}>
            <View style={style.boxUserImage}>
               <Image source={require('../../../content/assets/lima.jpg')} style={style.imagePerfil}/>
            </View>
            <Text style={style.title}>Lima</Text>
            <Text style={style.idade}>18 - anos Full Stack Developer</Text>
            
            <View style={style.textView}>
                <Text style={style.desc}>Programo a 3 anos e ja passei por algumas tecnologias, hoje eu trabalho como Full Stack na Worktab usando, Angular, AngularJS, Laravel e React-Native.</Text>
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
    },
    boxUserImage: {
        width: '100%',
        height: 110,
        marginBottom: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagePerfil: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        resizeMode: 'cover',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: RFValue(20),
        color: '#00000090'
    },
    idade: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: RFValue(18),
        color: '#00000090',
        marginBottom: 15,
    },
    textView: {
        flex: 1,
    },
    desc:{ 
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: RFValue(15),
        color: '#00000090',
    }
})