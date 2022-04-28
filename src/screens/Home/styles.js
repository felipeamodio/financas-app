import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.View`
    margin-left: 35px;
    margin-bottom: 25px;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-style: italic;
`;

export const Score = styled.Text`
    margin-top: 10px;
    font-size: 32px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const Title = styled.Text`
    margin-left: 35px;
    color: #00B94A;
    margin-bottom: 10px;
    font-size: 16px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #FFFFFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
`;