import dataFetchingReducer from "./dataFetching";
import errorFetchingReducer from "./errorFetching";
import detailsFetchingReducer from "./detailsFetching";
import screenshootsFetchingReducer from "./screenshootsFetching";
import { combineReducers } from "redux";
import trailersFetchingReducer from "./trailersFetching";

const reducers = combineReducers({
    data: dataFetchingReducer,
    error: errorFetchingReducer,
    details: detailsFetchingReducer,
    screenshoots: screenshootsFetchingReducer,
    trailers: trailersFetchingReducer
})

export default reducers;