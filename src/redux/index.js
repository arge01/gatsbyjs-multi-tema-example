import { combineReducers } from "redux";

const data = () => {
  return "Active Services"
}

const reducers = combineReducers({
  data,
});

export default reducers;
