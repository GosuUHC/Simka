import { useDispatch, useSelector } from "react-redux";
import { useAddNewFeedbackMutation } from "../../../transport/feedbacks";
import {
  setMessage,
  setReason,
  setWantToGetAnswerBack,
} from "../../state/slices/feedback";

const useFeedback = () => {
  const dispatch = useDispatch();
  const { reason, message, wantToGetAnswerBack } = useSelector(
    (state) => state.feedback,
  );
  const [addFeedback, { isLoading }] = useAddNewFeedbackMutation();

  const handleReasonChange = (reason) => {
    dispatch(setReason(reason));
  };

  const handleMessageChange = (message) => {
    dispatch(setMessage(message));
  };

  const handleWantToGetAnswerBackChange = (wantToGetAnswerBack) => {
    dispatch(setWantToGetAnswerBack(wantToGetAnswerBack));
  };

  const handleAddingFeedback = async ({ reason, message, email }) => {
    try {
      await addFeedback({ reason, message, email }).unwrap();
    } catch (e) {
      console.log(e);
    }
  };

  return {
    reason,
    message,
    wantToGetAnswerBack,
    handleReasonChange,
    handleMessageChange,
    handleWantToGetAnswerBackChange,
    handleAddingFeedback,
  };
};

export default useFeedback;
