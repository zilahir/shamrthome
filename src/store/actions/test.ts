import { TEST, TestActionTypes, Test } from "./actionTypes";

export const setTest = (test: Test): TestActionTypes => ({
  type: TEST,
  payload: {
    test: test.test,
  },
});
