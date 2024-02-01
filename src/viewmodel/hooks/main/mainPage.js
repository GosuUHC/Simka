import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../state/slices/mainPageSlice";

const useMainPage = () => {
  const dispatch = useDispatch();
  const { city, cityOptions } = useSelector((state) => state.mainPage);

  console.log(cityOptions);

  const handleCitySelect = (city) => {
    dispatch(setCity(city));
  };

  return {
    city,
    cityOptions,
    handleCitySelect,
  };
};

export { useMainPage };
