import React, {useContext} from 'react';
import {
    Container,
    Name,
    NewLink,
    NewText,
    Logout,
    LogoutText
} from './styles';
import {useNavigation} from '@react-navigation/native';

import DrawerButton from '../../components/DrawerButton';

import {AuthContext} from '../../contexts/auth';

export default function Profile(){
    const {user, userSignOut} = useContext(AuthContext);
    const navigation = useNavigation();

    return(    
        <Container>
            <DrawerButton />
            
            <Name>{user && user.nome}</Name>

            <NewLink 
                activeOpacity={0.7} 
                onPress={() => navigation.navigate('Registrar')}
            >
                <NewText>Registrar gastos</NewText>
            </NewLink>

            <Logout 
                activeOpacity={0.7}
                onPress={() => userSignOut()}
            >
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    )
}