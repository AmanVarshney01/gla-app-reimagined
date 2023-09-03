import DarkModeSwitch from '@/components/DarkModeSwitch'
import { View, Text, ScrollView, Switch } from 'react-native'

const settings = () => {
  return (  
    <ScrollView className=' bg-background'>
      <View className=' p-2'>
          <DarkModeSwitch />
      </View>
    </ScrollView>
  )
}

export default settings