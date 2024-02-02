import { useDispatch, useSelector } from "react-redux";
import {
  setBuildingNumber,
  setCity,
  setRoomType,
  setStreet,
} from "../../state/slices/address";

const useAddress = () => {
  const dispatch = useDispatch();
  const { city, cityOptions, address } = useSelector((state) => state.address);

  const handleCityChange = (city) => {
    console.log(`dispatch: ${city}`);
    if (cityOptions.includes(city)) {
      dispatch(setCity(city));
    }
  };

  const handleStreetChange = (street) => {
    dispatch(setStreet(street));
  };

  const handleBuildingNumberChange = (buildingNumber) => {
    dispatch(setBuildingNumber(buildingNumber));
  };

  const handleRoomTypeChange = (roomType) => {
    dispatch(setRoomType(roomType));
  };

  return {
    city,
    cityOptions,
    street: address.street,
    buildingNumber: address.buildingNumber,
    roomType: address.roomType,
    handleCityChange,
    handleStreetChange,
    handleBuildingNumberChange,
    handleRoomTypeChange,
  };
};

export default useAddress;
