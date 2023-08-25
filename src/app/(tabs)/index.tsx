import { Image, View, Text, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import profile1 from '../../../assets/profile1.json';
 import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function HomeScreen() {

  const currentProfile = profile1[0];

  return (
      <ScrollView className='bg-[#f8f5f2]'>
        <View  className='p-2 justify-center items-center'>
          <View className='flex-row p-4 w-full rounded-lg bg-white shadow shadow-black mb-2 border border-[#232323]'>
            <Image className=' rounded-full aspect-square w-14 mr-4' source={require('../../../assets/images/profilephoto.jpg')}/>
            <View>
              <Text  className="text-[#232323] text-2xl">{currentProfile.name}</Text>
              <Text className='text-[#222525]'>{currentProfile.course} - {currentProfile.branch} [ {currentProfile.semester} Sem ] - {currentProfile.isRegistered ? <Text className=' text-[#078080]'>Registered</Text>: <Text className=' text-red-600'>Not Registered</Text>}</Text>        
            </View>
          </View>
          <View className='flex-row w-full'>
            <View className='p-4 border border-[#232323] bg-white rounded-lg shadow shadow-black items-center mr-2'>
              <AnimatedCircularProgress
                size={95} 
                fill={currentProfile.attendance}
                width={7}
                tintColor={currentProfile.attendance >= 75 ? '#078080' : '#f45d48'}
                backgroundColor="white"
                rotation={0}
                lineCap="round"
                children={(fill) => <Text>{fill}%</Text>}
              />
              <Text className='mt-2 text-[#222525]'>Attendance</Text>
            </View>
            <View className='bg-white rounded-xl'>

            </View>
          </View>
        </View>
      </ScrollView>
  );
}

