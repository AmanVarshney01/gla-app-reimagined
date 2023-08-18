import { StyleSheet, Image, View, Text } from 'react-native';
// import { Image } from 'expo-image';
import profile1 from '../../../assets/profile1.json';

export default function HomeScreen() {

  const currentProfile = profile1[0];

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={require('../../../assets/images/profilephoto.jpg')}/>
        <View>
          <Text style={styles.name}>{currentProfile.name}</Text>
          <Text>{currentProfile.course} - {currentProfile.branch} [ {currentProfile.semester} Sem ] <Text style={{color: 'green'}}>- Registered</Text></Text>        
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
    // padding: 10,
    backgroundColor: 'white',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    width: '100%',
    // borderRadius: 15,
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
