import { View, Text, FlatList } from 'react-native';
import Notifications from '../../../assets/data/notifications.json'
import { ScrollView } from 'react-native-gesture-handler';

export default function NotificationsScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className='flex-1 bg-gray-100 dark:bg-gray-900'>
        <FlatList
        scrollEnabled={false}
        data={Notifications}
        renderItem={({item}) => (
          <View className='m-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
            <View className='flex justify-between items-center'>
              <Text className='text-lg font-bold dark:text-gray-200'>{item.title}</Text>
              <Text className='text-sm text-gray-500 dark:text-gray-400'>{item.time}</Text>
            </View>
            <Text className='mt-2 text-gray-700 dark:text-gray-300'>
              {item.message}
            </Text>
            <View className='mt-2 flex flex-row'>
              {item.tags.map((tag, index) => (
                <Text key={index} className='inline-block bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 mt-2 mr-2 px-2 py-1 rounded-full text-xs font-medium'>{tag}</Text>
              ))}
            </View>
          </View>
        )}
        />
      </View>
    </ScrollView>
  );
}

