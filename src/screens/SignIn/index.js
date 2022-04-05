import React from 'react';
import {StatusBar} from 'react-native'
import {Container, Title, Name} from './styles';

export default function Home(){
    return(
        <Container>
            <StatusBar backgroundColor="#131313" barStyle='light-content' />
            <Name>SignIn</Name>
        </Container>
    )
}