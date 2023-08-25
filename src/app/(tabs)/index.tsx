import { Image, View, Text, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import profile1 from '../../../assets/profile1.json';
 import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function HomeScreen() {

  const currentProfile = profile1[0];

  return (
      <ScrollView>
        <View  className='flex p-4 justify-center items-center gap-4'>
          <View className='flex-row p-4 w-full rounded-xl bg-white shadow shadow-black'>
            <Image className=' rounded-full aspect-square w-16' source={require('../../../assets/images/profilephoto.jpg')}/>
            <View>
              <Text  className=" text-2xl">{currentProfile.name}</Text>
              <Text>{currentProfile.course} - {currentProfile.branch} [ {currentProfile.semester} Sem ] - {currentProfile.isRegistered ? <Text className=' text-green-600'>Registered</Text>: <Text className=' text-red-600'>Not Registered</Text>}</Text>        
            </View>
          </View>
          <View className='p-4 bg-white rounded-xl shadow shadow-black'>
            <AnimatedCircularProgress
              size={95} 
              fill={currentProfile.attendance}
              width={7}
              tintColor="black"
              backgroundColor="white"
              rotation={0}
              lineCap="round"
              children={(fill) => <Text>{fill}%</Text>}
            />
          </View>
        </View>
      </ScrollView>
  );
}

