import { useEffect, useState } from "react";

type ExerciseData = {
  title: string;
  kCalConsumed: number;
  time: number;
};

async function fetchExercises(): Promise<ExerciseData[]> {
  // TODO: Integrate API

  return Promise.resolve([
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
    {
      title: "家事全般（立位・軽い）",
      kCalConsumed: 26,
      time: 10,
    },
  ]);
}

export function useFetchExercises() {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<ExerciseData[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await fetchExercises();

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
