import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Cores from '../constantes/Cores';


const LugarItem = (props) => {
    return (
        <TouchableOpacity style={estilos.lugarItem} onPress={props.onSelect}>
            <Image
                style={estilos.imagem}
                source={{ uri: props.imagem }} />
            <View style={estilos.infoContainer}>
                <Text style={estilos.nomeLugar}>{props.nomeLugar}</Text>
                <Text style={estilos.endereco}>{props.endereco}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    endereco: {
        color: '#777',
        fontSize: 16
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    lugarItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default LugarItem;