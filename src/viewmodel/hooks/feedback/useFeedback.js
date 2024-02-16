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

  const [addFeedback, { isLoading }] = useAddNewFeedbackMutation();

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
    console.log({
      reason: feedbackReasons.indexOf(reason) + 1,
      message,
      email,
    });

    try {
      await addFeedback({
        reason: feedbackReasons.indexOf(reason) + 1,
        message,
        email,
      }).unwrap();
    } catch (e) {
      console.log(e);
    }
  };

  return {
    reason,
    message,
    wantToGetAnswerBack,
    feedbackReasons,
    handleReasonChange,
    handleMessageChange,
    handleWantToGetAnswerBackChange,
    handleEmailChange,
    handleAddingFeedback,
  };
};

export default useFeedback;
