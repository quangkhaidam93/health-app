import { d01, iconCup, iconKnife } from "../../assets/images";
import CircularProgressBar from "./components/circular_progress_bar";
import HexagonItem from "./components/hexagon_item";
import LineChart from "./components/line_chart";
import MealItem from "./components/meal_item";
import { useFetchLineChart } from "./hooks/useFetchLineChart";
import { useFetchMealHistory } from "./hooks/useFetchMealHistory";
import "./index.css";

const TopPage = () => {
  const { data: mealHistories } = useFetchMealHistory();
  const { data: lineChartData } = useFetchLineChart();

  return (
    <div>
      <div className="flex flex-row h-80">
        <div className="w-2/5 relative">
          <img src={d01} alt="date" className="w-full object-cover h-80" />
          <div className="absolute left-0 right-0 top-0 bottom-0 grid place-content-center">
            <CircularProgressBar size={180} percentage={75} />
          </div>
        </div>

        <div className="w-3/5 bg-red">
          {lineChartData && (
            <LineChart
              labels={lineChartData.labels}
              datasets={lineChartData.datasets}
            />
          )}
        </div>
      </div>

      <div className="w-full flex flex-row justify-center my-6">
        <HexagonItem icon={iconKnife} title="Morning" className="mr-20" />
        <HexagonItem icon={iconKnife} title="Lunch" className="mr-20" />
        <HexagonItem icon={iconKnife} title="Dinner" className="mr-20" />
        <HexagonItem icon={iconCup} title="Snack" />
      </div>

      {mealHistories && (
        <div className="grid grid-rows-2 grid-cols-4 gap-2 mx-40 mb-7">
          {mealHistories.map((mealHistory, index) => (
            <MealItem
              key={index}
              imageUrl={mealHistory.imageUrl}
              date={mealHistory.date}
              meal={mealHistory.meal}
            />
          ))}
        </div>
      )}

      <div className="end_button w-80 py-4 text-light text-center m-auto mb-16">
        記録をもっと見る
      </div>
    </div>
  );
};

export default TopPage;
