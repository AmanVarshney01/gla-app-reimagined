import { StyleSheet, View, Text } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View className='bg-[#f8f5f2] flex-1'>
      <Text style={styles.title}>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
