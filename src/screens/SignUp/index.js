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
} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function SignUp(){
    const [isEmail, setIsEmail] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [isName, setIsName] = useState('');

    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);

    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);

    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFilledName, setIsFilledName] = useState(false);

    const {userSignUp} = useContext(AuthContext);

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

    function handleInputFocusName(){
        setIsFocusedName(false);
    }

    function handleInputBlurName(){
        setIsFocusedName(false);
    }

    function handleSignUp(){
        userSignUp(isEmail, isPassword, isName);
    }

    return(
        <Background>
        <Container 
            behavior={Platform.OS === "ios" ? 'padding' : ''}
            enable
        >
           <Logo source={require('../../assets/Logo.png')} />
            
            <AreaInput isFocused={isFocusedName}>
                <Input
                    placeholder="Nome"
                    autoCorrect={false}
                    onFocus={handleInputFocusName}
                    onBlur={handleInputBlurName}
                    isFocused={isFocusedName}
                    value={isName}
                    onChangeText={(nameUser) => setIsName(nameUser)}
                    color={(isFocusedName || isFilledName) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>
            
            <AreaInput isFocused={isFocusedEmail}>
                <Input
                    placeholder="Digite seu e-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onFocus={handleInputFocusEmail}
                    onBlur={handleInputBlurEmail}
                    isFocused={isFocusedEmail}
                    value={isEmail}
                    onChangeText={(email) => setIsEmail(email)}
                    color={(isFocusedEmail || isFilledEmail) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>

            <AreaInput isFocused={isFocusedPassword}>
                <Input
                    placeholder="Crie uma senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onFocus={handleInputFocusPassword}
                    onBlur={handleInputBlurPassword}
                    isFocused={isFocusedPassword}
                    value={isPassword}
                    onChangeText={(password) => setIsPassword(password)}
                    color={(isFocusedPassword || isFilledPassword) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

        </Container>
        </Background>
    )
}