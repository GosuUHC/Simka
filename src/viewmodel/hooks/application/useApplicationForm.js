import { useDispatch, useSelector } from "react-redux";
import {
  setIsSuccess,
  setName,
  setPhoneNumber,
  setSelectedTime,
} from "../../state/slices/application";
import {
  timeForCall,
  useSendCallBackFormMutation,
} from "../../../transport/callBackForms";
import useAddress from "../address/useAddress";

const useApplicationForm = () => {
  const dispatch = useDispatch();
  const { name, phoneNumber, selectedTime, isSuccess } = useSelector(
    (state) => state.application,
  );

  const { city: address } = useAddress();

  const [sendCallbackForm, { error }] = useSendCallBackFormMutation();

  const handleNameChange = (name) => {
    dispatch(setName(name));
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    dispatch(setPhoneNumber(phoneNumber));
  };

  const handleSelectedTimeChange = (selectedTime) => {
    dispatch(setSelectedTime(selectedTime));
  };

  const handleAddingCallback = async () => {
    const timeForCallIndex = timeForCall.indexOf(selectedTime) + 1;

    const callbackData = {
      name: name,
      phone: phoneNumber,
      time_for_call: timeForCallIndex,
      address: address,
      callback_agreement: true,
    };

    try {
      await sendCallbackForm(callbackData).unwrap();
      dispatch(setIsSuccess(true));
    } catch (e) {
      console.log(e);
      dispatch(setIsSuccess(false));
    }
  };

  return {
    name,
    phoneNumber,
    selectedTime,
    timeForCall,
    isSuccess,
    handleNameChange,
    handlePhoneNumberChange,
    handleSelectedTimeChange,
    handleAddingCallback,
  };
};

export default useApplicationForm;
