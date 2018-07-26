import React, { Component } from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native'

import Itens from './itens';
import axios from 'axios';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);

        this.state = { listaItens: [] };
    }

    componentWillMount() {
        // requisicao HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao realizar requisicao!!!') });
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#DDD'}}>
                <View>
                    <Image style={styles.image} resizeMode="contain" source={require('../../imgs/logo.png')} />
                </View>

                <View>
                    {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 80,
        marginBottom: 12,
        marginTop: 20,
    }
});
