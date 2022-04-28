import React from 'react';
import {
    Container,
    ButtonMenu
} from './styles';
import {useNavigation} from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default function DrawerButton(){
    const navigation = useNavigation();

    return(
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={28} color="#FFFFFF" />
            </ButtonMenu>
        </Container>
    )
}