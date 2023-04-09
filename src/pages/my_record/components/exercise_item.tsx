type ExerciseItemProps = {
  title: string;
  cal: number;
  time: number;
};

const ExerciseItem: React.FC<ExerciseItemProps> = ({ title, cal, time }) => {
  return (
    <div className="flex flex-row text-light border-b-gray-400 border-b pb-1 pt-2 w-full mr-6">
      <div className="rounded-full w-1 h-1 bg-white mt-2 mr-2" />
      <div className="flex-1 flex flex-col">
        <span>{title}</span>
        <span className="text-primary-300">{cal}kcal</span>
      </div>
      <div className="text-lg text-primary-300">{time} min</div>
    </div>
  );
};

export default ExerciseItem;
