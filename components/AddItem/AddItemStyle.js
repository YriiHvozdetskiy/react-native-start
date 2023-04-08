import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 10,
      marginHorizontal: 15,
   },
   input: {
      alignSelf: 'flex-start',
      width: '50%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'green',
      padding: 5,
   },
   button: {
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink',
      padding: 5,
      borderRadius: 5,
   },
})