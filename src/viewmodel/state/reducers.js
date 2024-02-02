import { addressReducer } from "./slices/address";
import { applicationFormReducer } from "./slices/application";
import { feedbackReducer } from "./slices/feedback";
import { mainReducer } from "./slices/main";
import { providersReducer } from "./slices/providers";
import { reviewsReducer } from "./slices/reviews";

const reducers = {
  addressReducer,
  applicationFormReducer,
  feedbackReducer,
  mainReducer,
  providersReducer,
  reviewsReducer,
};

export default reducers;
