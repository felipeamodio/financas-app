import React, {useContext} from 'react';
import {Container, Title, Name} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function Home(){
    const {user} = useContext(AuthContext);

    return(
        <Container>
            <Name>Home</Name>
            <Name>{user && user.nome}</Name>
            <Name>{user && user.email}</Name>
        </Container>
    )
}