import { userActionType } from "./user.types";

export const setCurrentUser = user => ({
  type: userActionType.userAction,
  payload: user
});
