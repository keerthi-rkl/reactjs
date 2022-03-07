import { combineReducers } from "redux";
import { Reducer } from "./Message/Reducer";
import { Crender } from "./Counter/Crender";
let rootReducer=combineReducers({
    msg:Reducer,count:Crender
})
export {rootReducer}