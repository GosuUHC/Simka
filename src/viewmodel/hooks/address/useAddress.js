import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../state/slices/address";

const useAddress = () => {
  const dispatch = useDispatch();
  const { city, cityOptions, address } = useSelector((state) => state.address);

  const handleCityChange = (city) => {
    console.log(`dispatch: ${city}`);
    if (cityOptions.includes(city)) {
      dispatch(setCity(city));
    }
  };

  return {
    city,
    cityOptions,
    handleCityChange,
  };
};

export default useAddress;
