import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { memo } from "react";
import { useColorScheme } from "nativewind";

function Chart() {
  const { colorScheme } = useColorScheme();
  const data = {
    labels: [
      "BCSC 1010",
      "BCSC 1020",
      "BCSC 1030",
      "BCSC 1040",
      "BCSC 1050",
      "BCSC 1060",
      "BCSC 1070",
    ],
    datasets: [
      {
        data: [90, 85, 50, 95, 80, 70, 64],
      },
    ],
  };
  // console.log("render")
  return (
    <BarChart
      style={{ borderRadius: 16 }}
      data={data}
      width={Dimensions.get("window").width + 60}
      height={220}
      yAxisSuffix="%"
      yAxisLabel=""
      yLabelsOffset={20}
      segments={4}
      fromNumber={data.datasets[0].data.reduce((a, b) => Math.min(a, b))}
      showBarTops={false}
      showValuesOnTopOfBars={true}
      chartConfig={{
        backgroundGradientFrom:
          colorScheme == "light" ? "#ffffff" : "rgb(38 38 38)",
        backgroundGradientTo:
          colorScheme == "light" ? "#ffffff" : "rgb(38 38 38)",
        color: (opacity = 1) =>
          colorScheme == "light" ? `rgba(23, 23, 23, ${opacity})` : "white",
        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        fillShadowGradientFrom: "rgb(59 130 246)",
        fillShadowGradientTo: "rgb(59 130 246)",
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientToOpacity: 0,
        decimalPlaces: 0,
        barPercentage: 0.5,
        barRadius: 2,
        propsForVerticalLabels: {
          fontSize: 8,
          // fontWeight: "bold",
        },
        propsForBackgroundLines: {
          strokeWidth: 0,
        },

        // useShadowColorFromDataset: true, // optional
      }}
    />
  );
}

export default memo(Chart);
