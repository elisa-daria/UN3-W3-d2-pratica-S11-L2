import { AVIABLE_JOBS } from "../actions";

const initialState = {
  searchResults: [],
};
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVIABLE_JOBS: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    default:
      return state;
  }
};
export default jobsReducer;
