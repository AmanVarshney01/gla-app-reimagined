import { Pressable, Text, View, FlatList, ScrollView } from 'react-native'
import { useState } from 'react'
import attendance from '../../assets/data/attendance.json'

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

  const menuContent = () => {

    const attendanceData: Record<string, AttendanceData[]> = attendance

    return (
      <FlatList
      scrollEnabled={false}
        data={attendanceData[selectedMenu]}
        renderItem={({ item }) => (
          <View className='p-4 border-b border-gray-200'>
            <Text className='text-lg font-bold'>{item.name}</Text>
            <Text className='text-sm text-gray-500'>{item.subjectCode}</Text>
            <Text className='text-base'>{item.attendancePercentage}% Attendance</Text>
            <Text className='text-base'>{item.attendedClasses} Classes Attended</Text>
            <Text className='text-base'>{item.totalClasses} Total Classes</Text>
            <Text className='text-sm text-gray-500'>{item.faculty}</Text>
          </View>
        )}
        keyExtractor={(item) => item.subjectCode}
      />
    )
  }

  return (
    <ScrollView className='flex-1 bg-gray-100 dark:bg-gray-900 p-2' showsVerticalScrollIndicator={false}>
      <View>
      <View className='bg-white h-52 w-full rounded-lg shadow-md'>

      </View>
      <View className='flex-row w-full justify-evenly items-center mt-4'>
        <Pressable className='py-4 px-2 flex-1 justify-center items-center rounded-lg' onPress={() => setSelectedMenu('lectures')} style={{backgroundColor: selectedMenu == 'lectures' ? "black" : "pink"}}>
          <Text className='text-lg text-white'>Lectures</Text>
        </Pressable>
        <Pressable className='py-4 px-2 flex-1 justify-center items-center rounded-lg' onPress={() => setSelectedMenu('labs')} style={{backgroundColor: selectedMenu == 'labs' ? "black" : "pink"}}>
          <Text className='text-lg text-white'>Labs</Text>
        </Pressable>
      </View>
      <View className='mt-4'>
        {menuContent()}
      </View>
    </View>
    </ScrollView>
  )
}
