export const TRASH_THIS_FAV = "TRASH_THIS_FAV";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const GETTING_VALUES_OF_SERACHBAR = "GETTING_VALUES_OF_SERACHBAR";
export const AVIABLE_JOBS = "AVIABLE_JOBS";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data.company_name,
  };
};

export const trashThisFavAction = (i) => {
  return {
    type: TRASH_THIS_FAV,
    payload: i,
  };
};

export const searchValueAction = (inputValue) => {
  return {
    type: GETTING_VALUES_OF_SERACHBAR,
    payload: inputValue,
  };
};

export const fetchJobs = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: AVIABLE_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
