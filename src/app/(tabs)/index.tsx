import { StyleSheet, Image } from 'react-native';
// import { Image } from 'expo-image';

import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={require('../../../assets/profilephoto.jpg')}/>
        <View>
          <Text style={styles.name}>Aman Varshney</Text>
          <Text>B. Tech - CS ( III ) <Text style={{color: 'green'}}>- Registered</Text></Text>        
        </View>
      </View>
      {/* <View style={{width: '100%', height: 100, backgroundColor: 'red'}}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F3F3F3',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 15,
    marginVertical: 10,
    // backgroundColor: 'pink',
    width: '100%',
    borderRadius: 10,
    padding: 15,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
});
