import DarkModeSwitch from '@/components/DarkModeSwitch'
import { View, Text, ScrollView, Switch } from 'react-native'

const settings = () => {
  return (  
    <ScrollView className='flex-grow bg-gray-100 dark:bg-gray-900'>
      <View className='flex justify-center p-4'>
          <DarkModeSwitch />
      </View>
    </ScrollView>
  )
}

export default settings