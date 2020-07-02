import { combineReducers } from "redux";

const newData = () => {
  return "Bağlantı"
}

const nextData = () => {
  return "Next Data"
}

const reducers = combineReducers({
  newData,
  nextData,
});

export default reducers;
