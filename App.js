import React, {useState} from "react";
import {
   StyleSheet,
   View,
   TextInput,
   KeyboardAvoidingView, // новий імпорт
   Platform,
   Text,
   ImageBackground,
   TouchableWithoutFeedback, // імпорт компонента обгортки
   Keyboard, // новий імпорт
} from "react-native";

export default function App () {
   const [value, setValue] = useState("");
   const inputHandler = (text) => setValue(text);
   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.container}>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
               behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
               <ImageBackground
                  source={require('./assets/photo-bg.jpg')}
                  style={styles.image}
               >
                  <View style={styles.innerBox}>
                     <Text style={styles.text}>hello world</Text>
                  </View>
                  <TextInput
                     placeholder="Type text"
                     value={value}
                     onChangeText={inputHandler}
                     style={styles.input}
                     placeholderTextColor={'#fff'}
                  />
               </ImageBackground>
            </KeyboardAvoidingView>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingBottom: 30,
   },
   input: {
      color: 'blue',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#fff',
      padding: 5,
      marginTop: 10,
      marginHorizontal: 30,
      textAlign:'center'

   },
   text: {
      fontSize: 20,
      textAlign: 'center',
   },
   innerBox: {
      borderStyle: 'solid',
      borderColor: 'tomato',
      borderWidth: 1,
      padding: 4,
      marginHorizontal: 30,
   },
   image: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      width: 430,
   },
});