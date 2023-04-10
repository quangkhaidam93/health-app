import { useEffect, useState } from "react";
import { DataSet } from "../../../components/line_chart";
import {
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  column8,
} from "../../../assets/images";

type RecommendedArticle = {
  imageUrl: string;
  datetime: string;
  title: string;
  subTitle: string;
};

async function fetchRecommendedArticles(): Promise<RecommendedArticle[]> {
  // TODO: Integrate API

  return Promise.resolve([
    {
      imageUrl: column1,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column2,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column3,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column4,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column5,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column6,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column7,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
    {
      imageUrl: column8,
      datetime: "2021.05.17 23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      subTitle: "#魚料理  #和食  #DHA",
    },
  ]);
}

export function useFetchRecommendedArticles() {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<RecommendedArticle[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await fetchRecommendedArticles();

        setData(response);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data, error };
}
