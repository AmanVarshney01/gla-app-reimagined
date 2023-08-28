import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import profile1 from "../../../assets/data/profile1.json";

export default function ProfileScreen() {
  const currentProfile = profile1[0];
  return (
    <ScrollView className='bg-[#f8f5f2]'>
      <View className='flex-1'>
        <View className='w-full justify-center items-center p-4'>
          <Image className=' w-32 h-32 rounded-full ' source={require("../../../assets/images/profilephoto.jpg")} />
        </View>
      </View>
    </ScrollView>
  );
}


