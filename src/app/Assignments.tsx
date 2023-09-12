import { View, Text, ScrollView, FlatList, Pressable, Modal } from 'react-native'
import { useState } from 'react'
import assignments from '../../assets/data/assignments.json'
import { ChevronRightIcon, XMarkIcon } from 'react-native-heroicons/solid'

type AssignmentType = {
  subject: string,
  title: string,
  lastDate: string,
  maxMarks: number,
  status: string,
}

export default function Assignments() {
  const [selectedItem, setSelectedItem] = useState({} as AssignmentType);
  const [modalVisible, setModalVisible] = useState(false);

  const AssignmentModal = ({ subject, title, lastDate, maxMarks, status }: AssignmentType) => {

    return (
      <Modal transparent={true} animationType='fade' visible={modalVisible} onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <View className='flex-1 justify-end items-center bg-black/50'>
          <View className='w-full min-h-[45vh] bg-gray-100 dark:bg-gray-800 rounded-t-3xl p-4 shadow-lg shadow-black'>
            {/* <View className=' mb-2 pb-1 border-b border-gray-300'>
              <Pressable className=' items-end' onPress={() => setModalVisible(!modalVisible)}>
                <XMarkIcon color={'#EF4444'} size={26} />
              </Pressable>
            </View> */}
            <Text className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>{subject}</Text>
            <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>{title}</Text>
            <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Last Date: {lastDate}</Text>
            <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Max Marks: {maxMarks}</Text>
            <Text className='text-gray-500 dark:text-gray-400 text-lg mb-2'>Status: {status}</Text>
            <View className='flex-row mt-4'>
              <Pressable className='bg-blue-500 dark:bg-blue-700 px-4 py-2 rounded-lg mr-4'>
                <Text className='text-white text-base'>Download</Text>
              </Pressable>
              {status === 'Not Submitted' ? (
                <Pressable className='bg-green-500 dark:bg-green-700 px-4 py-2 rounded-lg'>
                  <Text className='text-white text-base'>Upload</Text>
                </Pressable>
              ) : status === 'Submitted' ? (
                <Pressable className='bg-green-500/80 dark:bg-green-700/50 px-4 py-2 rounded-lg'>
                  <Text className='text-white/80 text-base'>Uploaded</Text>
                </Pressable>
              ) : (
                <Pressable className='bg-red-500/80 dark:bg-red-700/50 px-4 py-2 rounded-lg'>
                  <Text className='text-white/80 text-base'>Expired</Text>
                </Pressable>
              )}
            </View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className='mt-4 bg-gray-400 dark:bg-gray-700 px-4 py-2 rounded-lg items-center justify-center'>
              <Text className=' text-gray-100 text-base'>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <ScrollView className='bg-gray-100 dark:bg-gray-900 flex-1' showsVerticalScrollIndicator={false}>
      <View className='rounded-lg p-4 bg-gray-100 dark:bg-gray-900'>
        <FlatList
          scrollEnabled={false}
          data={assignments}
          keyExtractor={(item) => item.title + item.subject}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
              }} key={item.title} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-4 flex-row justify-between p-4 items-center active:bg-gray-200 dark:active:bg-gray-700'>
              <View className=''>
                <Text className='text-gray-900 dark:text-gray-100 text-base'>{item.subject}</Text>
                <Text className='text-gray-500 dark:text-gray-400'>{item.title}</Text>
              </View>
              <ChevronRightIcon
                color={'#10B981'}
                size={26} />
            </Pressable>
          )}
        />
      </View>
      <AssignmentModal
        subject={selectedItem.subject}
        title={selectedItem.title}
        lastDate={selectedItem.lastDate}
        maxMarks={selectedItem.maxMarks}
        status={selectedItem.status}
      />
    </ScrollView>
  )
}