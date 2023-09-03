// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { View, Text } from "react-native";
import { HomeIcon, BellIcon, PhoneIcon, Bars3Icon, UserIcon } from "react-native-heroicons/solid";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
// }

function HomeHeader() {
  return (
    <View className=" ">
      <Text className=" text-[#fffffe] font-bold text-xl">GLA University</Text>
      <Text className="text-[#fffffe] text-lg -mt-1">Mathura</Text>
    </View>
  )
}
function header(title: string) {
  return (
    <View>
        <Text className=" text-[#fffffe] font-bold text-xl">{title}</Text>
    </View>
)
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "#fffffe",
        tabBarActiveBackgroundColor: "#078080",
        tabBarShowLabel: false,
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fffffe",
          borderTopColor: "#232323",
          borderBottomWidth: 0,
          // borderTopWidth: 1,
          height: 58,
          paddingTop: 10,
          paddingBottom: 8,
          paddingHorizontal: 8,
        },
        tabBarItemStyle: {
          borderRadius: 100,
          // borderWidth: 1,
          marginHorizontal: 10,

        },
        headerTitle: HomeHeader,
        headerStyle: {
          backgroundColor: "#026c45",
          // borderBottomWidth: 1,
          // shadowColor: "pink",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerTitle: HomeHeader,
          // tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={26} />,
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
          headerTitle: () => header("Profile"),
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarIcon: ({ color }) => <UserIcon color={color} size={26} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          headerTitle: () => header("Notifications"),
          // tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          tabBarIcon: ({ color }) => <BellIcon color={color} size={26} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: "Help",
          headerTitle: () => header("Help"),
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="handshake-o" color={color} />
          // ),
          tabBarIcon: ({ color }) => <PhoneIcon color={color} size={26} />,
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          headerTitle: () => header("More"),
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="bars" color={color} />
          // ),
          tabBarIcon: ({ color }) => <Bars3Icon color={color} size={26} />,
          // headerShown: false,
        }}
      />
    </Tabs>
  );
}
