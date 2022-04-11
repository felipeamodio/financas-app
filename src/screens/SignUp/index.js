import React, {useState} from 'react';
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

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);

    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);

    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFilledName, setIsFilledName] = useState(false);

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
                    value={name}
                    onChangeText={(email) => setEmail(email)}
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
                    value={email}
                    onChangeText={(email) => setEmail(email)}
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
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    color={(isFocusedPassword || isFilledPassword) ? '#00B94A' : 'rgba(0, 0, 0, 0.20)'}
                />
            </AreaInput>

            <SubmitButton>
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

        </Container>
        </Background>
    )
}