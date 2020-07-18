import { combineReducers } from "redux";
import Axios from "axios"

const NEXTDATA = "NEXTDATA";
const GETDATA = "GETDATA";

export const nextData = () => ({
  type: NEXTDATA,
  payload: "Next active services"
});

export const getSuccessData = ( response ) => ({
  type: GETDATA,
  payload: response
})

export const serviceExample = () => {
  const data = [];
  Axios.get("https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/User/GetAll")
    .then(res => data.push(res.data))
    .catch(err => data.push(err));
  return data
}

export const getData = () => {
  return dispatch => {
    Axios.get("https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/User/GetAll")
      .then(res => dispatch(getSuccessData(res.data)) )
      .catch(err => console.log(err) );
  }
}

const getListData = (state = [], action) => {
  switch ( action.type ) {
    case GETDATA:
      return state = action.payload
    default:
      return state
  }
}

const initialState = "Active services";
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
  getListData
});

export default reducers;
