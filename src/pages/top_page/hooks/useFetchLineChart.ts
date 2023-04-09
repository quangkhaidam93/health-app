import { useEffect, useState } from "react";
import { DataSet } from "../components/line_chart";

type ResponseDataSet = {
  labels: string[];
  datasets: DataSet[];
};

async function fetchDataSet(): Promise<ResponseDataSet> {
  // TODO: Integrate API

  return Promise.resolve({
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    datasets: [
      {
        data: [10, 9.5, 9, 8, 7, 6, 5.5, 5, 4, 3, 3.5, 3],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
      {
        data: [10, 9.7, 8.3, 8, 7.5, 8, 8.5, 7.8, 7, 7.5, 8, 8],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
    ],
  });
}

export function useFetchLineChart() {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<ResponseDataSet>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await fetchDataSet();

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
