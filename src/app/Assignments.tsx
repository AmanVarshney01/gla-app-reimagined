import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import assignments from '../../assets/data/assignments.json'

export default function Assignments() {
  return (
    <ScrollView className='bg-gray-100 dark:bg-gray-900 flex-1' showsVerticalScrollIndicator={false}>
      <View className='rounded-lg p-4 bg-gray-100 dark:bg-gray-900'>
        <FlatList
          scrollEnabled={false}
          data={assignments}
          renderItem={({ item }) => (
            <View key={item.title} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-4 p-6'>
              <Text className='text-gray-900 dark:text-gray-100 text-xl font-medium mb-2'>{item.subject}</Text>
              <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>{item.title}</Text>
              <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Last Date: {item.lastDate}</Text>
              <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Max Marks: {item.maxMarks}</Text>
              <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Status: {item.status}</Text>
              <View className='flex flex-row justify-between items-center mt-4'>
                <Pressable className='bg-blue-500 dark:bg-blue-700 px-4 py-2 rounded-lg'>
                  <Text className='text-white text-base'>Download</Text>
                </Pressable>
                {item.status === 'Not Submitted' ? (
                  <Pressable className='bg-green-500 dark:bg-green-700 px-4 py-2 rounded-lg'>
                    <Text className='text-white text-base'>Upload</Text>
                  </Pressable>
                ) : item.status === 'Submitted' ? (
                  <Pressable className='bg-green-500/80 dark:bg-green-700/50 px-4 py-2 rounded-lg'>
                    <Text className='text-white/80 text-base'>Uploaded</Text>
                  </Pressable>
                ) : (
                  <Pressable className='bg-red-500/80 dark:bg-red-700/50 px-4 py-2 rounded-lg'>
                    <Text className='text-white/80 text-base'>Expired</Text>
                  </Pressable>
                )}
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}