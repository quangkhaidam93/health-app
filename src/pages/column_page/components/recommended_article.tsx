type RecommendedArticleProps = {
  imageUrl: string;
  datetime: string;
  title: string;
  subTitle: string;
};

const RecommendedArticle: React.FC<RecommendedArticleProps> = ({
  imageUrl,
  datetime,
  title,
  subTitle,
}) => {
  return (
    <div>
      <div className="w-full relative">
        <img src={imageUrl} alt="column" className="w-full"></img>
        <div className="absolute bottom-0 left-0 px-2 py-1 bg-primary-300 text-light">
          {datetime}
        </div>
      </div>
      <div className="mt-1">{title}</div>
      <div className="text-xs text-primary-400">{subTitle}</div>
    </div>
  );
};

export default RecommendedArticle;
