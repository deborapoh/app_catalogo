import React, { Component } from 'react';
import { AppRegistry } from 'react-native'

import ListaItens from './src/components/listaitens';

class catalogo extends Component {
    render() {
        return (
            <ListaItens />
        );
    }
}

AppRegistry.registerComponent('catalogo', () => catalogo);
