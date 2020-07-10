import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';
import LugarItem from '../componentes/LugarItem'

import { useSelector } from 'react-redux';






const ListaDeLugaresTela = (props) => {
    const lugares = useSelector(estado => estado.lugares.lugares);
    return (
        <FlatList
            data={lugares}
            keyExtractor={lugar => lugar.id}
            renderItem={lugar =>
                <LugarItem
                    nomeLugar={lugar.item.titulo}
                    onSelect={
                        () => props.navigation.navigate('DetalhesDoLugar',
                            { tituloLugar: lugar.item.titulo, idLugar: lugar.id })
                    }
                    imagem={lugar.item.imagemURI}
                    endereco={'um endereco'}
                />

            } />
    );
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de lugares',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoLugar') }} />
            </HeaderButtons>
    }
}






const estilos = StyleSheet.create({

});

export default ListaDeLugaresTela;

//Mapatela
//NovoLugarTela
//DetalhesDoLugarTela
//ListaDeLugarestela