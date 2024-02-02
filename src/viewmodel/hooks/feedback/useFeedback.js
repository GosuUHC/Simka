import { useAddNewFeedbackMutation } from "../../../transport/feedbacks";

const useFeedback = () => {
  const [addFeedback, { isLoading }] = useAddNewFeedbackMutation();
  const feedback =
};

export default useFeedback;
