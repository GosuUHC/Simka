import { addressReducer } from "./slices/address";
import { applicationReducer } from "./slices/application";
import { feedbackReducer } from "./slices/feedback";
import { providersReducer } from "./slices/providers";
import { reviewsReducer } from "./slices/reviews";

const reducers = {
  addressReducer,
  applicationReducer,
  feedbackReducer,
  providersReducer,
  reviewsReducer,
};

export default reducers;
