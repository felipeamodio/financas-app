import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
    Background,
    Input,
    SubmitButton,
    SubmitText
} from './styles';
import DrawerButton from '../../components/DrawerButton';
import PickerComponent from '../../components/Picker';

export default function New(){
    const [value, setValue] = useState('');
    const [type, setType] = useState('receita');

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <DrawerButton />

                <SafeAreaView style={{alignItems: 'center'}}>
                    <Input 
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                    />

                    <PickerComponent onChange={setType} type={type} />

                    <SubmitButton activeOpacity={0.7}>
                        <SubmitText>Salvar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}