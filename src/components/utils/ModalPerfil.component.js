import React from 'react';
import {
    Text,
    Modal,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from './Carousel.component';

export default ({props, show, close}) => {

    React.useEffect(() => {
        
    }, [show])

    return (
        <React.Fragment>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={show}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <View style={style.headerModal}>
                            <TouchableOpacity onPress={() => close()} style={style.buttonCLose}>
                                <Icon name="close-outline" size={35} color="#000000" />
                            </TouchableOpacity>
                            <Text style={style.modalPerfil}>Meu perfil</Text>
                        </View>

                        <View style={style.carouselView}>
                            <Carousel />    
                        </View>

                    </View>
                </View>
            </Modal>
        </React.Fragment>
    )
}


const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000090'
    },
    modalView: {
        width: '90%',
        height: '80%',
        backgroundColor: "#eef2f9",
        borderRadius: 20,
        overflow: 'hidden'
    },
    headerModal: {
        width: '100%',
        height: 70,
        backgroundColor: '#eef2f9',
        position: 'relative', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalPerfil: {
        fontSize: RFValue(20),
        fontFamily: 'Poppins',
        color: '#00000080'
    },
    buttonCLose: {
        width: 70,
        height: 70,
        borderRadius: 35,
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
  

})