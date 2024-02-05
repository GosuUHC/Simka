import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setPhoneNumber,
  setSelectedTime,
} from "../../state/slices/application";

const useApplicationForm = () => {
  const dispatch = useDispatch();
  const { name, phoneNumber, selectedTime } = useSelector(
    (state) => state.application,
  );

  const handleNameChange = (name) => {
    dispatch(setName(name));
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    dispatch(setPhoneNumber(phoneNumber));
  };

  const handleSelectedTimeChange = (selectedTime) => {
    dispatch(setSelectedTime(selectedTime));
  };

  return {
    name,
    phoneNumber,
    selectedTime,
    handleNameChange,
    handlePhoneNumberChange,
    handleSelectedTimeChange,
  };
};

export default useApplicationForm;
