import { View, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Result() {
  const data = {
    labels: ["Math", "Science", "History", "English", "Art"],
    datasets: [
      {
        data: [90, 85, 50, 95, 80],
      },
    ],
  };

  return (
    <View className=" flex-1 bg-neutral-100">
      <Text className="">Result</Text>

      <View className=" justify-center items-center">
        <BarChart
        style={{marginVertical: 8, borderRadius: 16, paddingTop: 20}}
          data={data}
          width={Dimensions.get("window").width -20}
          height={220}
          yAxisSuffix="%"
          yAxisLabel=""
          yLabelsOffset={20}
          segments={4}
          fromNumber={data.datasets[0].data.reduce((a, b) => Math.min(a, b))}
          showBarTops={false}
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(23, 23, 23, ${opacity})`,
            // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            fillShadowGradientFrom: "#16A34A",
            fillShadowGradientTo: "#ffffff",
            fillShadowGradientFromOpacity: 1,
            fillShadowGradientToOpacity: 0,
            decimalPlaces: 0,
            barPercentage: 0.5,
            propsForBackgroundLines: {
              strokeWidth: 0,
            },
            // useShadowColorFromDataset: true, // optional
          }}
        />
      </View>
    </View>
  );
}
