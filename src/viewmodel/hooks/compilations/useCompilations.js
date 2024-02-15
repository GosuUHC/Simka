import { useGetCompilationsQuery } from "../../../transport/compilations";

const useCompilations = () => {
  const { data: compilationsData, isSuccess } = useGetCompilationsQuery();

  const randomIndexes = [];

  if (compilationsData) {
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * compilationsData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
  }

  const randomCompilations = randomIndexes.map(
    (index) => compilationsData[index],
  );

  return {
    compilationsData: randomCompilations,
    isSuccess,
  };
};

export default useCompilations;
