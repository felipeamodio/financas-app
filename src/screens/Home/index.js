import React, {useContext} from 'react';
import {Container, LogOut, TextLogOut, Name} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function Home(){
    const {user, userSignOut} = useContext(AuthContext);

    return(
        <Container>
            <Name>Home</Name>
            <Name>{user && user.nome}</Name>
            <Name>{user && user.email}</Name>

            <LogOut onPress={() => userSignOut()}>
                <TextLogOut>Sair</TextLogOut>
            </LogOut>
        </Container>
    )
}