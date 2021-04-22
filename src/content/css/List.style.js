import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    viewMain: {
        flex: 1,
        backgroundColor: '#eef2f9',
    },
    margins: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    headerView: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    textTitle: {
        fontSize: RFValue(20),
        fontFamily: 'Poppins',
        color: '#49494970',
        marginLeft: -10,
    },
    buttonVoltar: {
        width:  70,
        height: 70,
        borderRadius: 35,
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bodyViews: {
        flex: 1,
    },
    container: {
        width: ((Dimensions.get('window').width - 40) * 99) / 100,
        height: 90,
        position: 'relative',
    },
    telative: {
        width: '100%',
        height: '100%',
        position: 'relative',
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    boxArt: {
        width: 70,
        height: 90,
        minWidth: 70,
        minHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
    },
    fullImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    BodyMusic: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    titleMusica: {
        fontSize:  RFValue(17),
        fontFamily: 'Poppins',
        width: '100%',
        textAlign: 'left',
        color: '#494949'
    },
    time: {
        fontSize:  RFValue(13),
        fontFamily: 'Poppins',
        width: '100%',
        textAlign: 'right',
        color: '#494949'
    },
    playView: {
        width: 50,
        height: 90,
        minWidth: 50,
        minHeight: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonPlay :{
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#494949',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginBottom: {
        marginBottom: 30,
    },
    scroll: {
        flex: 1,
    },
    aling: {
        alignSelf: 'center'
    },
    viewLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});