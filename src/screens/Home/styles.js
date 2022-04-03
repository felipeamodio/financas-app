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