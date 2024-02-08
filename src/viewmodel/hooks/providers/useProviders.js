import { useDispatch, useSelector } from "react-redux";
import { setFilters, setSortBy } from "../../state/slices/providers";
import { useGetProvidersSortedQuery } from "../../../transport/providers";

const useProviders = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.providers.sortBy);
  const filters = useSelector((state) => state.providers.filters);
  const {
    data: providersData = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProvidersSortedQuery(sortBy);

  const handleSortByChange = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };

  const handleFiltersChange = (filters) => {
    dispatch(setFilters(filters));
  };

  return {
    sortBy,
    providersData,
    isLoading,
    isSuccess,
    isError,
    error,
    filters,
    handleSortByChange,
    handleFiltersChange,
  };
};

export default useProviders;
