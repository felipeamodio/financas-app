import React, {useState, useContext} from 'react';
import {Platform} from 'react-native';
import {
    Container, 
    Background, 
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText    
} from './styles';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);

    const {userSignUp} = useContext(AuthContext)

    function handleInputFocusEmail(){
        setIsFocusedEmail(true);
    }

    function handleInputFocusPassword(){
        setIsFocusedPassword(true);
    }

    function handleInputBlurEmail(){
        setIsFocusedEmail(false);
    }

    function handleInputBlurPassword(){
        setIsFocusedPassword(false);
    }

    function handleLogin(){
        
    }

    return(
        <Background>
        <Container 
            behavior={Platform.OS === "ios" ? 'padding' : ''}
            enable
        >
           <Logo source={require('../../assets/Logo.png')} />
            
            <AreaInput isFocused={isFocusedEmail}>
                <Input
                    placeholder="Digite seu e-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onFocus={handleInputFocusEmail}
                    onBlur={handleInputBlurEmail}
                    isFocused={isFocusedEmail}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    color={(isFocusedEmail || isFilledEmail) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>

            <AreaInput isFocused={isFocusedPassword}>
                <Input
                    placeholder="Digite sua senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onFocus={handleInputFocusPassword}
                    onBlur={handleInputBlurPassword}
                    isFocused={isFocusedPassword}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    color={(isFocusedPassword || isFilledPassword) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>

            <SubmitButton onPress={handleLogin}>
                <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignUp')}>
                <LinkText>Criar uma conta</LinkText>
            </Link>
        </Container>
        </Background>
    )
}