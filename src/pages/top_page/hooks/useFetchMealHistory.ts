import { useEffect, useState } from "react";
import { MealHistory } from "../../../models/meal_history";
import { d01, d02, l01, l02, l03, m01, s01 } from "../../../assets/images";

async function fetchMealHistories(): Promise<MealHistory[]> {
  // TODO: Integrate API

  return Promise.resolve([
    {
      imageUrl: m01,
      date: "05.21",
      meal: "Morning",
    },
    {
      imageUrl: l03,
      date: "05.21",
      meal: "Lunch",
    },
    {
      imageUrl: d01,
      date: "05.21",
      meal: "Dinner",
    },
    {
      imageUrl: l01,
      date: "05.21",
      meal: "Snack",
    },
    {
      imageUrl: m01,
      date: "05.21",
      meal: "Morning",
    },
    {
      imageUrl: l02,
      date: "05.21",
      meal: "Lunch",
    },
    {
      imageUrl: d02,
      date: "05.21",
      meal: "Dinner",
    },
    {
      imageUrl: s01,
      date: "05.21",
      meal: "Snack",
    },
  ]);
}

export function useFetchMealHistory() {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<MealHistory[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await fetchMealHistories();

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
