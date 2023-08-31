import { Image, View, Text, ScrollView, FlatList } from "react-native";
// import Animated from "react-native-reanimated";
import profile1 from "../../../assets/data/profile1.json";
import news from "../../../assets/data/news.json";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TimetableCard from "@/components/TimetableCard";
import timetableData from "../../../assets/data/timetable.json";


export default function HomeScreen() {
  const currentProfile = profile1[0];

  return (
    <ScrollView className="bg-background" showsVerticalScrollIndicator={false}>
      <View className="p-2 justify-center items-center">
        <View className="flex-row p-4 w-full items-center rounded-lg bg-white shadow shadow-stroke mb-3 boder border-stroke">
          <Image
            className=" rounded-full aspect-square w-16 mr-4"
            source={require("../../../assets/images/profilephoto.jpg")}
          />
          <View>
            <Text className="text-heading text-2xl">{currentProfile.name}</Text>
            <Text className="text-text">
              {currentProfile.course} - {currentProfile.branch} [{" "}
              {currentProfile.semester} Sem ]
            </Text>
            <View className="w-full">
              <Text>
                Sec - {currentProfile.section} ({currentProfile.classRollNo}) -{" "}
                {currentProfile.isRegistered ? (
                  <Text className=" text-primary">Registered</Text>
                ) : (
                  <Text className=" text-secondary">Not Registered</Text>
                )}
              </Text>
              {/* <Text>Roll No. - {currentProfile.classRollNo}</Text> */}
            </View>
          </View>
        </View>
        <View className="flex-row w-full">
          <View className="p-4 brder border-stroke bg-white rounded-lg shadow shadow-stroke items-center mr-2">
            <AnimatedCircularProgress
              size={95}
              fill={currentProfile.attendance}
              width={7}
              tintColor={
                currentProfile.attendance >= 75 ? "#078080" : "#f45d48"
              }
              backgroundColor="#f8f5f2"
              rotation={0}
              lineCap="round"
              children={(fill) => <Text className="text-lg">{fill}%</Text>}
            />
            <Text className="mt-2 text-text text-base">Attendance</Text>
          </View>
          <View className="rounded-lg flex-1 p-2 bg-white boder border-stroke shadow shadow-stroke">
            <View className="flex-1">
              <Text className="text-text text-xs">Upcoming Class</Text>
              <View className=" my-2">
                <Text className=" text-lg text-text leading-[20px] mb-1">
                  Discrete Mathematics
                </Text>
                <Text className="text-sm -mt-1 mb-3 text-text">
                  BCSC 1010 (Theory)
                </Text>
                <View className="flex-row border rounded-lg justify-evenly divide-x">
                  <View className="">
                    <Text className="text-text text-xs text-center px-2">
                      Thu
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-text text-xs text-center px-1">
                      AB-8 311
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-text text-xs text-center px-1">
                      14:00-15:00
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-primary">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
        </View>
        <View className="w-full bg-white boder border-stroke shadow shadow-stroke rounded-lg mt-3 p-1">
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center">
                <FontAwesome
                  name="circle"
                  size={10}
                  color="#FF934F"
                ></FontAwesome>
                <Text className="mx-2">{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View className="w-full flex-row mt-3">
          <View className="mr-2 p-2 bg-white brder border-[#232323] shadow shadow-stroke rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-heading">3</Text>
              <Text className="text-text text-base">Assignments due</Text>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-primary">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
          <View className="flex-1 p-2 bg-white borer border-stroke shadow shadow-stroke rounded-lg ">
            <View className="mb-2">
              <Text className="text-3xl text-heading">93.50%</Text>
              <Text className="text-heading text-base">Percentage</Text>
            </View>
            <View className="border-t pt-1 flex-row justify-between items-center">
              <Text className="text-primary">View</Text>
              <FontAwesome name="arrow-right" size={18} color="#078080" />
            </View>
          </View>
        </View>
        <View className="w-full mt-3 bg-white brder border-stroke shadow shadow-stroke rounded-lg p-2">
          <View className="border-b border-stroke pb-2">
            <Text className="text-lg font-base">Today's Timetable</Text>
          </View>
          <View className="pt-2 w-full ">
            {timetableData[0] ? timetableData.map((item, index) => (
              <TimetableCard
                key={index}
                subject={item["subject"]}
                teacher={item["teacher"]}
                room={item["room"]}
                block={item["block"]}
                time={item["time"]}
                subjectCode={item["subjectCode"]}
                classType={item["classType"]}
                attendance={item["attendance"]}
              />
            )) : <Text className=" text-secondary">No Timetable Found</Text>}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
