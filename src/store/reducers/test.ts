import { TEST } from "./actionTypes";

const initialState = {
  test: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.payload.test,
      };
    default:
      return state;
  }
};

export default reducer;
