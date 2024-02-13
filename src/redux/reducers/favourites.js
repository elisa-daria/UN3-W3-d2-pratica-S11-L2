import { TRASH_THIS_FAV, ADD_TO_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};
const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case TRASH_THIS_FAV: {
      return {
        ...state,

        content: [
          ...state.content.slice(0, action.payload),
          ...state.content.slice(action.payload + 1),
        ],
      };
    }
    default:
      return state;
  }
};
export default favouriteReducer;
