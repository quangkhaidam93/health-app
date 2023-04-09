type CircularProgressBarProps = {
  size: number;
  percentage: number;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  size,
  percentage,
}) => {
  const deg = (360 / 100) * (percentage - 50);

  return (
    <div style={{ width: size, height: size }} className="relative">
      <div
        className="bg-transparent absolute rounded-full border-solid border-4 border-light"
        style={{
          height: size,
          width: size,
          clip: `rect(0px ${size}px ${size}px ${size / 2}px)`,
        }}
      />
      <div
        className="bg-transparent absolute rounded-full border-solid border-4 border-light"
        style={{
          height: size,
          width: size,
          clip: `rect(0px ${size}px ${size}px ${size / 2}px)`,
          rotate: `${deg}deg`,
        }}
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-row justify-center items-center text-light">
        <span className="mr-2 text-lg">05/21</span>
        <span className="text-2xl">75%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
