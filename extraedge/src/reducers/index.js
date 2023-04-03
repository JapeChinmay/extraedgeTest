import { combineReducers } from "redux";
import { fetchUsersReducer } from "./fetchUserReducer";
const mainReducer = combineReducers({
  users: fetchUsersReducer,
});

export default mainReducer;
