import React from 'react';
import { StyleSheet } from 'react-native';

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
    headerMainView: {
        flex:.4 ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bodyMainView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'

    },
    controlsMainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
});