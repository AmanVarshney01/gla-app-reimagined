import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import { useState, useRef, useMemo } from "react";
import assignments from "../../assets/data/assignments.json";
import { ChevronRightIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from "react-native-heroicons/solid";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomBackdrop from "@/components/CustomBackdrop";
import {useColorScheme} from 'nativewind'

type AssignmentType = {
  subject: string;
  title: string;
  lastDate: string;
  maxMarks: number;
  status: string;
};

export default function Assignments() {
  const {colorScheme} = useColorScheme()
  const [selectedItem, setSelectedItem] = useState({} as AssignmentType);

  // const [modalVisible, setModalVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);

  // const openModal = () => {
  //   bottomSheetRef.current?.
  // }

  const AssignmentBottomSheet = ({
    subject,
    title,
    lastDate,
    maxMarks,
    status,
  }: AssignmentType) => {
    return (
      <View className="w-full bg-white dark:bg-neutral-800 rounded-t-3xl p-4">
        {/* <View className=' mb-2 pb-1 border-b border-neutral-300'>
              <Pressable className=' items-end' onPress={() => setModalVisible(!modalVisible)}>
                <XMarkIcon color={'#EF4444'} size={26} />
              </Pressable>
            </View> */}
        <View className=" items-center w-full rounded-t-3xl mb-4">
          <View className="  w-10 h-1 bg-neutral-300 rounded-lg "></View>
        </View>
        <Text className=" text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">
          {subject}
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400 text-lg mb-2">
          {title}
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400 text-lg mb-2">
          Last Date: {lastDate}
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400 text-lg mb-2">
          Max Marks: {maxMarks}
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400 text-lg mb-2">
          Status: {status}
        </Text>
        <View className="flex-row mt-4">
          <Pressable className="bg-blue-500 dark:bg-blue-700 px-4 py-2 rounded-lg mr-4 flex-row items-center">
            <ArrowDownTrayIcon color={"white"} size={26} />
            <Text className="text-white text-base ml-2">Download</Text>
          </Pressable>
          {status === "Not Submitted" ? (
            <Pressable className="bg-green-500 dark:bg-green-700 px-4 py-2 rounded-lg flex-row items-center">
              <ArrowUpTrayIcon color={"white"} size={26} />
              <Text className="text-white text-base ml-2">Upload</Text>
            </Pressable>
          ) : status === "Submitted" ? (
            <Pressable className="bg-green-500/80 dark:bg-green-700/50 px-4 py-2 rounded-lg">
              <Text className="text-white/80 text-base">Uploaded</Text>
            </Pressable>
          ) : (
            <Pressable className="bg-red-500/80 dark:bg-red-700/50 px-4 py-2 rounded-lg">
              <Text className="text-white/80 text-base">Expired</Text>
            </Pressable>
          )}
        </View>
        {/* <Pressable
          onPress={() => bottomSheetRef.current?.forceClose()}
          className="mt-4 bg-neutral-400 dark:bg-neutral-700 px-4 py-2 rounded-lg items-center justify-center"
        >
          <Text className=" text-neutral-100 text-base">Close</Text>
        </Pressable> */}
      </View>
      // </View>
      // </Modal>
    );
  };

  return (
    <>
      <ScrollView
        className=" bg-neutral-100 dark:bg-neutral-900"
        showsVerticalScrollIndicator={false}
      >
        {/* <View className=" flex-1 bg-black"> */}
        <View className=" rounded-lg p-2 bg-neutral-100 dark:bg-neutral-900">
          <FlatList
            scrollEnabled={false}
            data={assignments}
            keyExtractor={(item) => item.title + item.subject}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setSelectedItem(item);
                  bottomSheetRef.current?.expand();
                }}
                key={item.title}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg mb-4 flex-row justify-between p-4 items-center active:bg-neutral-200 dark:active:bg-neutral-700"
              >
                <View className="">
                  <Text className="text-neutral-900 dark:text-neutral-100 text-base">
                    {item.subject}
                  </Text>
                  <Text className="text-neutral-500 dark:text-neutral-400">
                    {item.title}
                  </Text>
                </View>
                <ChevronRightIcon color={"#10B981"} size={26} />
              </Pressable>
            )}
          />
        </View>
        {/* </View> */}
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        handleComponent={null}
        // backdropComponent={<CustomBackdrop animatedIndex={0} animatedPosition={0} />}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
        // bottomInset={46}
        // detached={false}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: colorScheme == 'light' ? 'white' : "rgb(38 38 38)"
        }}
      >
        <AssignmentBottomSheet
          subject={selectedItem.subject}
          title={selectedItem.title}
          lastDate={selectedItem.lastDate}
          maxMarks={selectedItem.maxMarks}
          status={selectedItem.status}
        />
      </BottomSheet>
    </>
  );
}
