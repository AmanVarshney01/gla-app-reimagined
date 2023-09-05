import { StyleSheet, View, Text } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View className='bg-gray-100 flex-1'>
      <View className='m-4 p-4 bg-white rounded-lg shadow-lg'>
        <View className='flex justify-between items-center'>
          <Text className='text-lg font-bold'>University Notification</Text>
          <Text className='text-sm text-gray-500'>12:00 PM, 1st Jan 2022</Text>
        </View>
        <Text className='mt-2 text-gray-700'>
          This is a sample university notification. Please check the details.
        </Text>
        <View className='mt-2 flex flex-wrap'>
          <Text className='inline-block bg-blue-200 text-blue-800 mt-2 mr-2 px-2 py-1 rounded-full text-xs font-medium'>#tag1</Text>
          <Text className='inline-block bg-blue-200 text-blue-800 mt-2 mr-2 px-2 py-1 rounded-full text-xs font-medium'>#tag2</Text>
        </View>
      </View>
    </View>
  );
}

