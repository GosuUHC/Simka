import { useDispatch, useSelector } from "react-redux";

const useMainPage = () => {
  const dispatch = useDispatch();
  const { city, cityOptions } = useSelector((state) => state.mainPage);

  const handleCitySelect = (city) => {
    dispatch(city);
  };

  return {
    city,
    cityOptions,
    handleCitySelect,
  };
};

export { useMainPage };
