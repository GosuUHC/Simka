import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../state/slices/providers";
import {
  availableSortingOptions,
  useGetProvidersSortedQuery,
} from "../../../transport/providers";

const useProviders = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.providers);
  const {
    data: providersData = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProvidersSortedQuery(availableSortingOptions.CHEAP);

  const handleFiltersChange = (filters) => {
    dispatch(setFilters(filters));
  };

  return {
    providersData,
    isLoading,
    isSuccess,
    isError,
    error,
    filters,
    handleFiltersChange,
  };
};

export default useProviders;
