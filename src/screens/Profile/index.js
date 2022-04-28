import React, {useContext} from 'react';
import {
    Container,
    Name,
    NewLink,
    NewText,
    Logout,
    LogoutText
} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function Profile(){
    const {user, userSignOut} = useContext(AuthContext);
    return(    
        <Container>
            <Name>Felipe</Name>

            <NewLink activeOpacity={0.7}>
                <NewText>Registrar gastos</NewText>
            </NewLink>

            <Logout activeOpacity={0.7}>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    )
}