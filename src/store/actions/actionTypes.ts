export const TEST = "TEST";

export interface Test {
  test: string;
}

interface TestAction {
  type: typeof TEST;
  payload: Test;
}

export interface TestState {
  test: string;
}

export type TestActionTypes = TestAction;
