import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import Colors from "@/constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function HomeHeader() {
  return (
    <View className=" ">
      <Text className=" text-white font-bold text-xl">GLA University</Text>
      <Text className=" text-lg text-gray-200 -mt-1">Mathura</Text>
    </View>
  )
}
// const styles = StyleSheet.create({
  //   headerTitle: {
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //   },
  //   headerSubtitle: {
  //     fontSize: 18,
  //     marginTop: -4,
  //   },
  // });

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        
        headerTitle: HomeHeader,
        headerStyle: {
          backgroundColor: "#006400",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          // headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: "Help",
          // headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="handshake-o" color={color} />
          ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          // headerTitle: HomeHeader,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bars" color={color} />
          ),
          // headerShown: false,
        }}
      />
    </Tabs>
  );
}
