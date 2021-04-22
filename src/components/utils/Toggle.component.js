import React, {useState, useEffect} from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";


export default ({props, open, activate, textDesativado,textActivit}) => {

    const translateX = 5;
    
    const [state, setState] = useState({
        translateX: new Animated.Value(translateX)
    });

    const initialPosition = () => {
        Animated.sequence([
            Animated.timing(state.translateX, { toValue: translateX, duration: 250, useNativeDriver: true }),
        ]).start()
    }

    const translatePosition = () => {
        Animated.sequence([
            Animated.timing(state.translateX, { toValue: 32, duration: 250, useNativeDriver: true }),
        ]).start()
    }


    useEffect(() => {
        if(open){
            translatePosition()
        }else{
            initialPosition()
        }
    },[open]);


 

    return (
        <React.Fragment>
                <View style={style.mainView}>
                    <TouchableHighlight underlayColor="#00000000" onPress={() => activate()}>
                        <View style={style.boxToggle}>
                            <Animated.View 
                                style={[style.boxCircle, {
                                    transform: [
                                        {translateY: 4},
                                        {translateX: state.translateX}
                                    ],
                                    backgroundColor: open ? "#2EE21A" : "#FF2D2D"
                                }]}
                            > 
                            </Animated.View>
                        </View>
                    </TouchableHighlight>
                    <View style={style.textView}>
                        {open ? (
                            <Text style={style.textToggle}>{textActivit}</Text>
                        ) : (
                            <Text style={style.textToggle}>{textDesativado}</Text>
                        )
                        }
                    </View>
                </View>
        </React.Fragment>
    )
}



const style = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxToggle: {
        width: 60,
        height: 30,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        fontSize: 16,
        shadowOpacity: 0.30,
        shadowRadius: 3.45,
        elevation: 3,
        position: 'relative'
    },
    boxCircle: {
        width: 23,
        height: 23,
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 23 / 2
    },
    textView: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: 10,
    },
    textToggle: {
        fontSize: RFValue(16),
        fontFamily: 'Poppins',
        flexWrap: 'wrap',
    }
    
});