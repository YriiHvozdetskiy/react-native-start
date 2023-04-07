import {styles} from './ListItemStyle'
import {Text, TouchableOpacity} from 'react-native';

export const ListItem = ({item, deleteHandler}) => {

   return (
      <TouchableOpacity
         activeOpacity={0.3}
         onPress={() => deleteHandler(item?.id)}
      >
         <Text style={styles.item}>{item?.text}</Text>
      </TouchableOpacity>
   );
};