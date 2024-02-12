import { useGetCompilationsQuery } from "../../../transport/compilations";

const useCompilations = () => {
  const { data: compilationsData, isSuccess } = useGetCompilationsQuery();

  return {
    compilationsData,
    isSuccess,
  };
};

export default useCompilations;
