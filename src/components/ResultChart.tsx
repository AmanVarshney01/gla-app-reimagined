import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

function ResultChart() {
  const data = {
    labels: ["BCSC 1010", "BCSC 1020", "BCSC 1030", "BCSC 1040", "BCSC 1050", "BCSC 1060", "BCSC 1070"],
    datasets: [
      {
        data: [90, 85, 50, 95, 80, 70, 64],
      },
    ],
  };
  return (
    <BarChart
      style={{ marginVertical: 8, borderRadius: 16, paddingTop: 20 }}
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
        propsForVerticalLabels: {
            fontSize: 9,
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

export default ResultChart;
