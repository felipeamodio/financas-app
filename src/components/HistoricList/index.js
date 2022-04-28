import React from 'react';
import {
    Container,
    Type,
    IconView,
    TextType,
    Value
} from './styles';

import { Feather } from '@expo/vector-icons';

export default function HistoricList(){
    return(
        <Container>
            <Type>
                <IconView>
                    <Feather name="arrow-up" size={20} color="#FFFFFF" />
                    <TextType>receita</TextType>
                </IconView>
            </Type>

            <Value>R$900,00</Value>
        </Container>
    )
}