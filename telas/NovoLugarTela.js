import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Cores from '../constantes/Cores';
import { useDispatch } from 'react-redux'

import * as lugaresActions from '../store/lugares-actions';


const NovoLugarTela = (props) => {

    const [novoLugar, setNovoLugar] = useState('');

    const dispatch = useDispatch();

    const adicionarLugar = () => {
        dispatch(lugaresActions.addLugar(novoLugar));
        props.navigation.goBack();
    }


    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo lugar</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(texto) => setNovoLugar(texto)}
                    value={novoLugar} />
                <Button
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={adicionarLugar}
                />
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    form: {
        margin: 30
    }
});

export default NovoLugarTela;