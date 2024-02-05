import { useDispatch, useSelector } from "react-redux";
import {
  setAdvantages,
  setDisadvantages,
  setProviderId,
  setRatingConnection,
  setRatingService,
  setRatingSpeed,
  setRatingStability,
  setUserCommentary,
  setUserEmail,
  setUserName,
  setUserScoreNotification,
} from "../../state/slices/reviews";

const useUserExperienceForm = () => {
  const dispatch = useDispatch();
  const {
    providerId,
    userName,
    userCommentary,
    userEmail,
    userScoreNotification,
    advantages,
    disadvantages,
    ratingConnection,
    ratingStability,
    ratingSpeed,
    ratingService,
  } = useSelector((state) => state.reviews);

  const handleProviderIdChange = (providerId) => {
    setProviderId(providerId);
  };
  const handleUserNameChange = (userName) => {
    setUserName(userName);
  };
  const handleUserCommentaryChange = (userCommentary) => {
    setUserCommentary(userCommentary);
  };
  const handleUserEmailChange = (userEmail) => {
    setUserEmail(userEmail);
  };
  const handleUserScoreNotificationChange = (userScoreNotification) => {
    setUserScoreNotification(userScoreNotification);
  };
  const handleAdvantagesChange = (advantages) => {
    setAdvantages(advantages);
  };
  const handleDisadvantagesChange = (disadvantages) => {
    setDisadvantages(disadvantages);
  };
  const handleRatingConnectionChange = (ratingConnection) => {
    setRatingConnection(ratingConnection);
  };
  const handleRatingStabilityChange = (ratingStability) => {
    setRatingStability(ratingStability);
  };
  const handleRatingSpeedChange = (ratingSpeed) => {
    setRatingSpeed(ratingSpeed);
  };
  const handleRatingServiceChange = (ratingService) => {
    setRatingService(ratingService);
  };


};

export default useUserExperienceForm;
