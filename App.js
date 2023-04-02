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
   Keyboard, Alert, Button, TouchableOpacity, Pressable,
} from "react-native";

export default function App () {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [value, setValue] = useState("");
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

   const inputHandler = (text) => setValue(text);

   const nameHandler = (text) => setName(text);

   const passwordHandler = (text) => setPassword(text);

   const onLogin = () => {
      Alert.alert("Credentials", `${name} + ${password} + ${value}`);
   };
   // ховаєм клавіатуру, змінюєм відступ форми
   const keyboardHiddenHandler = () => {
      setIsShowKeyboard(false);

      Keyboard.dismiss();
   };
   console.log('Platform', Platform.OS);
   return (
      <TouchableWithoutFeedback
         onPress={keyboardHiddenHandler} // ховаєм клавіатуру, змінюєм відступ форми
      >
         <View style={styles.container}>
            <ImageBackground
               source={require('./assets/photo-bg.jpg')}
               style={styles.image}
            >
               <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                  behavior={Platform.OS === "ios" ? "padding" : null} // height - не працює чогось для Андроід
               >
                  <View style={styles.innerBox}>
                     <Text style={styles.text}>hello world</Text>
                  </View>
                  <TextInput // дані з цього інпута візьмуться з цього інпута, томущо в onLogin є його value
                     placeholder="Type text"
                     value={value}
                     onChangeText={inputHandler}
                     style={styles.input}
                     placeholderTextColor={'#fff'}
                     onFocus={() => setIsShowKeyboard(true)} // зімінюжм відступ форми
                  />
                  <View
                     style={{...styles.form, marginBottom: isShowKeyboard ? 20 : 100}} // змінюєм конкретні стилі форми
                  >
                     <TextInput
                        value={name}
                        onChangeText={nameHandler}
                        placeholder="Username"
                        style={styles.input}
                        placeholderTextColor={'#fff'}
                        onFocus={() => setIsShowKeyboard(true)} // зімінюжм відступ форми
                     />
                     <TextInput
                        value={password}
                        onChangeText={passwordHandler}
                        placeholder="Password"
                        secureTextEntry={true} // скриваєм ведені дані (password)
                        style={styles.input}
                        placeholderTextColor={'#fff'}
                        onFocus={() => setIsShowKeyboard(true)} // зімінюжм відступ форми
                     />
                     <Button
                        title={"Login"} // текст в кнопці
                        onPress={onLogin}
                        color={Platform.OS === "ios" ? 'blue' : 'blue'} // кнопка немає style і під ios андроід виглядає по різному
                     />
                     <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8} // на скільки буде ставати кнопка прозорою при натискані
                        // onPress={onLogin}
                        onPress={keyboardHiddenHandler} // ховаєм клавіатуру, змінюєм відступ форми
                     >
                        <Text style={styles.buttonText}>Sign In</Text>
                     </TouchableOpacity>
                     <Pressable style={styles.btn}>
                        <Text style={styles.buttonText}>Save</Text>
                     </Pressable>
                  </View>
               </KeyboardAvoidingView>
            </ImageBackground>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      // justifyContent: "flex-end",
      paddingBottom: 30,
   },
   input: {
      color: 'blue',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#fff',
      padding: 5,
      marginTop: 10,
      // marginHorizontal: 30,
      textAlign: 'center',
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
      justifyContent: 'flex-end',
      // alignItems: 'center',
      width: 430,
   },
   form: {
      marginHorizontal: 30,
      gap: 15,
      // marginBottom: 100,
   },
   button: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      borderStyle: 'solid',
      borderWidth: 2,

      ...Platform.select({
         ios: {
            backgroundColor: 'blue',
            borderColor: 'red',
         },
         android: {
            backgroundColor: 'red',
            borderColor: '#fff',
         },
      }),
      // Альтернатива Platform.select
      // backgroundColor: Platform.OS === "ios" ? 'blue' : 'red',
      // borderColor: Platform.OS === "ios" ? 'red' : '#fff',
   },
   buttonText: {
      color: '#fff',
   },
   btn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
   },
});