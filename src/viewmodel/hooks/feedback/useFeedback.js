import { useAddNewFeedbackMutation } from "../../../transport/feedbacks";

const useFeedback = () => {
  const [addFeedback, { isLoading }] = useAddNewFeedbackMutation();

  const handleAddingFeedback = async ({ reason, message, email }) => {
    await addFeedback({ reason, message, email }).unwrap();
  };

  return { handleAddingFeedback };
};

export default useFeedback;
