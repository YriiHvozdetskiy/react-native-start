import {Text, View} from 'react-native';
import {styles} from './style'

export const Header = () => {

   return (
      <View style={styles.header}>
         <Text style={styles.title}>Header</Text>
      </View>
   );
};