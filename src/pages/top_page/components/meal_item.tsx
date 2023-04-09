type MealItemProps = {
  imageUrl: string;
  date: string;
  meal: string;
};

const MealItem: React.FC<MealItemProps> = ({ imageUrl, date, meal }) => {
  return (
    <div style={{ paddingTop: "100%" }} className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img src={imageUrl} alt="meal" className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-0 bottom-0 bg-primary-300 p-2 text-light">
        {date}
        {meal}
      </div>
    </div>
  );
};

export default MealItem;
