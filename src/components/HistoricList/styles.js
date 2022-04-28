import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 5px;
    padding: 10px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.40);
    background-color: rgba(0, 0, 0, 0.05); 
`;

export const Type = styled.View`
    flex-direction: row;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.type === 'despesa' ? '#C62C36' : '#049301'};
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;
`;

export const TextType = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    margin-left: 4px;
`;

export const Value = styled.Text`
    color: #222222;
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
`;