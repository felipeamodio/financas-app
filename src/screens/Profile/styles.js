import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #131313;
    align-items: center;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 25px;
    color: #FFFFFF;
`;

export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00B94A;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #C62C36;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
`;
