import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Cores from '../constantes/Cores';
import { useDispatch } from 'react-redux'

import * as lugaresActions from '../store/lugares-actions';
import TiraFoto from '../componentes/TiraFoto';


const NovoLugarTela = (props) => {

    const [novoLugar, setNovoLugar] = useState('');

    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const dispatch = useDispatch();

    const adicionarLugar = () => {
        dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
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
                <TiraFoto onFotoTirada={fotoTirada} />
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