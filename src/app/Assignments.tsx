import { View, Text } from 'react-native'

export default function Assignments() {
  return (
    <View className={'p-6'}>
      <View className={'rounded-lg bg-white dark:bg-gray-800 p-4'}>
        <View>
          <Text className={'text-lg dark:text-gray-100'}>Subject: Math</Text>
          <Text className={'text-base dark:text-gray-200'}>Time: 10:00 AM</Text>
          <Text className={'text-base dark:text-gray-200'}>Last Date: 20th March</Text>
        </View>
      </View>
    </View>
  )
}