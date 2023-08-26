import { Image, View, Text, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import profile1 from '../../../assets/data/profile1.json';
 import {AnimatedCircularProgress} from 'react-native-circular-progress';
 import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeScreen() {

  const currentProfile = profile1[0];

  return (
      <ScrollView className='bg-[#f8f5f2]'>
        <View  className='p-2 justify-center items-center'>
          <View className='flex-row p-4 w-full rounded-lg bg-[#fffffe] shadow shadow-black mb-2 border border-[#232323]'>
            <Image className=' rounded-full aspect-square w-14 mr-4' source={require('../../../assets/images/profilephoto.jpg')}/>
            <View>
              <Text  className="text-[#232323] text-2xl">{currentProfile.name}</Text>
              <Text className='text-[#222525]'>{currentProfile.course} - {currentProfile.branch} [ {currentProfile.semester} Sem ] - {currentProfile.isRegistered ? <Text className=' text-[#078080]'>Registered</Text>: <Text className=' text-red-600'>Not Registered</Text>}</Text>        
            </View>
          </View>
          <View className='flex-row w-full'>
            <View className='p-4 border border-[#232323] bg-[#fffffe] rounded-lg shadow shadow-black items-center mr-2'>
              <AnimatedCircularProgress
                size={95} 
                fill={currentProfile.attendance}
                width={7}
                tintColor={currentProfile.attendance >= 75 ? '#078080' : '#f45d48'}
                backgroundColor="#fffffe"
                rotation={0}
                lineCap="round"
                children={(fill) => <Text className='text-lg'>{fill}%</Text>}
              />
              <Text className='mt-2 text-[#222525] text-base'>Attendance</Text>
            </View>
            <View className='rounded-lg flex-1 p-2 bg-[#fffffe] border border-[#232323] shadow shadow-black'>
              <View className='flex-1'>
                <Text className='text-[#222525] text-xs'>Upcoming Class</Text>
                <View className=' my-2'>
                  <Text className=' text-lg '>BCSC 1010 (Theory)</Text>
                  <Text className='text-sm -mt-1 mb-2'>Discrete Mathematic</Text>
                  <View className='flex-row border rounded-lg justify-evenly divide-x'>
                    <View className=''><Text className='text-[#222525] text-xs text-center px-2'>Thu</Text></View>
                    <View className='flex-1'><Text className='text-[#222525] text-xs text-center px-1'>14:00-15:00</Text></View>
                    <View className='flex-1'><Text className='text-[#222525] text-xs text-center px-1'>AB-8 311</Text></View>
                  </View>
                </View>
              </View>
              <View className='border-t pt-1 flex-row justify-between items-center'>
                <Text className='text-[#078080]'>View More</Text>
                <FontAwesome name="arrow-right" size={18} color="#078080" />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
  );
}

