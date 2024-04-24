import { useDispatch, useSelector } from "react-redux";
import { useAddNewFeedbackMutation } from "../../../transport/feedbacks";
import {
  setEmail,
  setMessage,
  setReason,
  setWantToGetAnswerBack,
} from "../../state/slices/feedback";
import { feedbackReasons } from "../../../transport/feedbacks";

const useFeedback = () => {
  const dispatch = useDispatch();
  const { reason, message, wantToGetAnswerBack, email } = useSelector(
    (state) => state.feedback,
  );

  const [addFeedback] = useAddNewFeedbackMutation();

  const handleReasonChange = (reason) => {
    dispatch(setReason(reason));
  };

  const handleMessageChange = (message) => {
    dispatch(setMessage(message));
  };

  const handleWantToGetAnswerBackChange = () => {
    dispatch(setWantToGetAnswerBack(!wantToGetAnswerBack));
  };

  const handleEmailChange = (email) => {
    dispatch(setEmail(email));
  };

  const handleAddingFeedback = async () => {
    try {
      await addFeedback({
        reason: feedbackReasons.indexOf(reason) + 1,
        response_agreement: 1,
        message,
        email,
      }).unwrap();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return {
    reason,
    message,
    wantToGetAnswerBack,
    feedbackReasons,
    email,
    handleReasonChange,
    handleMessageChange,
    handleWantToGetAnswerBackChange,
    handleEmailChange,
    handleAddingFeedback,
  };
};

export default useFeedback;
