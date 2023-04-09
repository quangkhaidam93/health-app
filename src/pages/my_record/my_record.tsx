import { useMemo } from "react";
import { bodyRecord, myDiary, myExercise } from "../../assets/images";
import LineChart from "../../components/line_chart";
import CategoryItem from "./components/category_item";
import DiaryItem from "./components/diary_item";
import ExerciseItem from "./components/exercise_item";
import { useFetchExercises } from "./hooks/useFetchExercises";
import { useFetchLineChart } from "./hooks/useFetchLineChart";
import "./index.css";
import { useFetchDiaries } from "./hooks/useFetchDiaries";

const MyRecord = () => {
  const { data: lineChartData } = useFetchLineChart();
  const { data: exerciseData } = useFetchExercises();
  const { data: diaryData } = useFetchDiaries();

  const renderExerciseItems = useMemo(() => {
    if (!exerciseData) return [];

    const totalExercises = exerciseData.length;

    const list: JSX.Element[] = [];

    for (let i = 0; i < totalExercises; i = i + 2) {
      const item1 = exerciseData[i];
      const item2 = exerciseData[i + 1];

      list.push(
        <div className="flex flex-row" key={`${i}-${i + 1}`}>
          <ExerciseItem
            title={item1.title}
            cal={item1.kCalConsumed}
            time={item1.time}
          />
          <div className="w-10" />
          {item2 && (
            <ExerciseItem
              title={item2.title}
              cal={item2.kCalConsumed}
              time={item2.time}
            />
          )}
        </div>
      );
    }

    return list;
  }, [exerciseData]);

  return (
    <div className="px-40">
      <div className="flex flex-row justify-between my-14">
        <CategoryItem
          image={bodyRecord}
          title="BODY RECORD"
          description="自分のカラダの記録"
        />
        <CategoryItem
          image={myExercise}
          title="MY EXERCISE"
          description="自分の運動の記録"
        />
        <CategoryItem
          image={myDiary}
          title="MY DIARY"
          description="自分の日記"
        />
      </div>
      {lineChartData && (
        <div className="bg-dark-600 px-6 py-4">
          <div className="flex flex-row text-light">
            <div>
              BODY <br /> RECORD
            </div>
            <div className="ml-4 text-2xl">2021.05.21</div>
          </div>
          <LineChart
            labels={lineChartData.labels}
            datasets={lineChartData.datasets}
          />
        </div>
      )}
      {exerciseData && (
        <div className="bg-dark-600 px-6 py-4 my-14">
          <div className="flex flex-row text-light items-center">
            <div>
              MY <br /> EXERCISE
            </div>
            <div className="ml-4 text-2xl">2021.05.21</div>
          </div>

          <div
            style={{ maxHeight: 60 * 4 }}
            className="overflow-y-scroll my-exercise-section"
          >
            {renderExerciseItems}
          </div>
        </div>
      )}

      {diaryData && (
        <div>
          <div className="text-2xl">MY DIARY</div>
          <div className="grid grid-rows-2 grid-cols-4 gap-3 mb-8">
            {diaryData.map((diary, index) => (
              <DiaryItem
                key={index}
                date={diary.date}
                time={diary.time}
                content={diary.content}
              />
            ))}
          </div>
        </div>
      )}

      <div className="end_button w-80 py-4 text-light text-center m-auto mb-16">
        コラムをもっと見る
      </div>
    </div>
  );
};

export default MyRecord;
