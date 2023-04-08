import {styles} from './AddItemStyle';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';

export const AddItem = ({addHandler}) => {
   const [value, setValue] = useState('');

   const inputHandler = (text) => {
      setValue(text)
   }

   const addItem = () => {
      addHandler(value);
      setValue('')
   }

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder={'Add item'}
            value={value}
            onChangeText={inputHandler}
         />
         <TouchableOpacity
            style={styles.button}
            onPress={addItem}
         >
            <Text>{'Add'}</Text>
         </TouchableOpacity>
      </View>
   );
};