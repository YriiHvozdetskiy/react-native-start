import React, {useCallback, useState} from "react";
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
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const FONT_FAMILY_PRIMARY = 'Roboto-Regular';
const FONT_FAMILY_SECONDARY = 'Montserrat-Medium';
const FONT_FAMILY_TERTIARY = 'Raleway-Regular';

export default function App () {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [value, setValue] = useState("");
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
   const [fontsLoaded] = useFonts({
      [FONT_FAMILY_PRIMARY]: require('./assets/fonts/Roboto-Regular.ttf'),
      [FONT_FAMILY_SECONDARY]: require('./assets/fonts/Montserrat-Medium.ttf'),
      [FONT_FAMILY_TERTIARY]: require('./assets/fonts/Raleway-Regular.ttf'),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) return null;

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
      <View style={styles.container} onLayout={onLayoutRootView}>
         <TouchableWithoutFeedback
            onPress={keyboardHiddenHandler} // ховаєм клавіатуру, змінюєм відступ форми
         >
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
         </TouchableWithoutFeedback>
      </View>
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
      fontFamily: FONT_FAMILY_PRIMARY,
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
      textAlign: 'center',
      fontFamily: FONT_FAMILY_SECONDARY,
      fontSize: 50,
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
      fontFamily: FONT_FAMILY_TERTIARY,
      fontWeight: 400,
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