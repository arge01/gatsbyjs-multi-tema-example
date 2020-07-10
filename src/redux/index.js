import { combineReducers } from "redux";

const NEXTDATA = "NEXTDATA";

export const nextData = () => ({
  type: NEXTDATA,
  payload: "Next active services"
});

const initialState = "Active services"

const data = (state=initialState, action) => {
  switch ( action.type ) {
    case NEXTDATA:
      return state = action.payload;
    default:
      return state;
  }
}

const reducers = combineReducers({
  data,
});

export default reducers;
