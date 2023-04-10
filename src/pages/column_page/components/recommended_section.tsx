type RecommendedSectionProps = {
  title: string;
  subTitle: string;
};

const ITEM_WIDTH = (window.innerWidth - 320 - 32 * 3) / 4;

const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div
      className="bg-dark-600 px-2 py-6 flex flex-col items-center"
      style={{ width: ITEM_WIDTH }}
    >
      <div className="text-primary-300 text-2xl text-center">{title}</div>
      <div className="w-14 bg-light my-2" style={{ height: 1 }} />
      <div className="text-light">{subTitle}</div>
    </div>
  );
};

export default RecommendedSection;
