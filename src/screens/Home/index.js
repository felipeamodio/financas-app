import React, {useContext} from 'react';
import {
    Background,
    Container,
    Name,
    Score,
    Title
} from './styles';

import DrawerButton from '../../components/DrawerButton';

import {AuthContext} from '../../contexts/auth';

export default function Home(){
    const {user} = useContext(AuthContext);

    return(
        <Background>
            <DrawerButton />

            <Container>
                <Name>Felipe Alves</Name>
                <Score>R$190,00</Score>
            </Container>

            <Title>Últimas movimentações</Title>
        </Background>
    )
}