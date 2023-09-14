import { Pressable, Text, View, FlatList } from 'react-native'
import { useState } from 'react'
import attendance from '../../assets/data/attendance.json'
import { ScrollView } from 'moti';

type AttendanceData = {
  name: string;
  subjectCode: string;
  attendancePercentage: number;
  attendedClasses: number;
  totalClasses: number;
  faculty: string;
}

export default function Attendance() {
  const [selectedMenu, setSelectedMenu] = useState<string>("lectures")

  // const selectedMenuData: any = attendance[selectedMenu] 
  // console.log(selectedMenuData)

  const menuContent = () => {

    const attendanceData: Record<string, AttendanceData[]> = attendance

    return (
      <FlatList
      scrollEnabled={false}
        data={attendanceData[selectedMenu]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.subjectCode}</Text>
            <Text>{item.attendancePercentage}</Text>
            <Text>{item.attendedClasses}</Text>
            <Text>{item.totalClasses}</Text>
            <Text>{item.faculty}</Text>
          </View>
        )}
        keyExtractor={(item) => item.subjectCode}
      />
    )
  }

  return (
    <ScrollView className=''>
    <View className='flex-1 bg-gray-100 dark:bg-gray-900 p-2'>
      <View className='bg-white h-52 w-full rounded-lg'>

      </View>
      <View className=' flex-row w-full justify-evenly items-center'>
        <Pressable className='py-4 px-2 flex-1 justify-center items-center' onPress={() => setSelectedMenu('lectures')}>
          <Text className=' text-lg'>Lectures</Text>
        </Pressable>
        <Pressable className='py-4 px-2 flex-1 justify-center items-center' onPress={() => setSelectedMenu('labs')}>
          <Text className=' text-lg'>Labs</Text>
        </Pressable>
      </View>
      <View>
        {menuContent()}
      </View>
    </View>
    </ScrollView>
  )
}
