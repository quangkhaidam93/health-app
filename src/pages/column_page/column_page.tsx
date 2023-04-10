import RecommendedArticle from "./components/recommended_article";
import RecommendedSection from "./components/recommended_section";
import { useFetchRecommendedArticles } from "./hooks/useFetchRecommendedArticles";

const ColumnPage = () => {
  const { data: recommendedArticles } = useFetchRecommendedArticles();

  return (
    <div className="px-40 pt-20 pb-16">
      <div className="flex flex-row justify-between mb-14">
        <RecommendedSection title="RECOMMENDED COLUMN" subTitle="オススメ" />
        <RecommendedSection title="RECOMMENDED DIET" subTitle="ダイエット" />
        <RecommendedSection title="RECOMMENDED BEAUTY" subTitle="美容" />
        <RecommendedSection title="RECOMMENDED HEALTH" subTitle="健康" />
      </div>

      {recommendedArticles && (
        <div className="grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-4">
          {recommendedArticles.map((article, index) => (
            <RecommendedArticle
              key={index}
              imageUrl={article.imageUrl}
              title={article.title}
              subTitle={article.subTitle}
              datetime={article.datetime}
            />
          ))}
        </div>
      )}

      <div className="end_button w-80 py-4 text-light text-center m-auto mt-9">
        コラムをもっと見る
      </div>
    </div>
  );
};

export default ColumnPage;
