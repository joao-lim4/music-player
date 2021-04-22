import React,{useRef} from 'react';
import {
    Text,
    Modal,
    View,
    TouchableOpacity,
    StyleSheet,
    Switch,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from './Carousel.component';
import Toggle from './Toggle.component';

export default ({props, show, close,listMusic, setListMusics}) => {

    React.useEffect(() => {
        
    }, [show, listMusic])

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
                            <Text style={style.modalPerfil}>Configs</Text>
                        </View>

                        <View style={style.bodyView}>

                            <Toggle textActivit="Desativar lista de músicas" textDesativado="Ativar lista de músicas" activate={() => setListMusics('config')} open={listMusic}/>
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
        height: '30%',
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
    bodyView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
    }
  

})