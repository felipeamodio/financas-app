import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: purple;
`;

export const Title = styled.Text`
    color: ${props => props.cor};
    font-size: ${props => props.tam}px;
`;

export const Name = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 50;
`;

export const LogOut = styled.TouchableOpacity`
    margin-top: 40px;
    width: 50%;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #FF0000;
    border-radius: 8px;
`;

export const TextLogOut = styled.Text`
    color: #FFFFFF;
    font-size: 20;
    font-weight: bold;
`;