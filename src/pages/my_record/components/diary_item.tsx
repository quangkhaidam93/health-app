type DiaryItemProps = {
  date: string;
  time: string;
  content: string;
};

const DiaryItem: React.FC<DiaryItemProps> = ({ date, time, content }) => {
  return (
    <div
      className="border border-gray-400 relative"
      style={{ paddingTop: "100%" }}
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 p-4">
        <div className="text-lg">{date}</div>
        <div className="text-lg">{time}</div>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default DiaryItem;
