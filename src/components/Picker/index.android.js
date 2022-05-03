import React from 'react';
import {
    PickerView
} from './styles';
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent({onChange, type}){
    return(
        <PickerView>
            <Picker 
                style={{
                    width: '100%',
                }}
                selectedValue={type}
                onValueChange={(value) => onChange(value)}>
                <Picker.Item label='Receita' value='receita' />
                <Picker.Item label='Despesa' value='despesa' />
            </Picker>
        </PickerView>
    )
}