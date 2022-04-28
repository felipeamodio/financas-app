import React from 'react';
import {
    Container,
    Type,
    IconView,
    TextType,
    Value
} from './styles';

import { Feather } from '@expo/vector-icons';

export default function HistoricList({data}){
    return(
        <Container>
            <Type>
                <IconView type={data.type}>
                    <Feather 
                        name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                        size={20} 
                        color="#FFFFFF" />
                    <TextType>{data.type}</TextType>
                </IconView>
            </Type>

            <Value>R$ {data.value}</Value>
        </Container>
    )
}