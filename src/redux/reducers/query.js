import { GETTING_VALUES_OF_SERACHBAR } from "../actions";

const initialState = {
  query: "",
};
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_VALUES_OF_SERACHBAR: {
      return {
        ...state,
        query: action.payload,
      };
    }

    default:
      return state;
  }
};
export default queryReducer;
