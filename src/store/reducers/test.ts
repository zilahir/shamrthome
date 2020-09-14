import { TEST, TestActionTypes, TestState } from "../actions/actionTypes";

const initialState: TestState = {
  test: "",
};

const reducer = (state = initialState, action: TestActionTypes): TestState => {
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
