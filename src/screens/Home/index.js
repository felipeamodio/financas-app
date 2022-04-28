import React, {useContext, useState} from 'react';
import {
    Background,
    Container,
    Name,
    Score,
    Title,
    List
} from './styles';

import DrawerButton from '../../components/DrawerButton';
import HistoricList from '../../components/HistoricList';

import {AuthContext} from '../../contexts/auth';

export default function Home(){
    const {user} = useContext(AuthContext);
    const [historic, setHistoric] = useState([
        {key: '1', type: 'receita', value: 1200.00},
        {key: '2', type: 'despesa', value: 400.00},
        {key: '3', type: 'receita', value: 1000.80},
        {key: '4', type: 'despesa', value: 1800.90},
    ])

    return(
        <Background>
            <DrawerButton />

            <Container>
                <Name>Felipe Alves</Name>
                <Score>R$190,00</Score>
            </Container>

            <Title>Últimas movimentações</Title>

            <List
                showsVerticalScrollIndicator={false}
                data={historic}
                keyExtractor={item => item.key}
                renderItem={({item}) => (<HistoricList data={item} />)}
             />
        </Background>
    )
}