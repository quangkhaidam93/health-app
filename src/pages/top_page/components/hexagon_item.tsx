import "./hexagon_item.css";

type HexagonItemProps = {
  title: string;
  icon: string;
  className?: string;
};

const HexagonItem: React.FC<HexagonItemProps> = ({
  title,
  icon,
  className,
}) => {
  return (
    <div
      className={`hexagon flex flex-col items-center justify-center cursor-pointer ${className}`}
    >
      <img src={icon} alt="icon" className="w-14 h-14" />
      <span className="text-light text-xl">{title}</span>
    </div>
  );
};

export default HexagonItem;
