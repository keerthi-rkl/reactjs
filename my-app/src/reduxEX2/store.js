import { createStore } from "redux";
import { Reducer } from "./Message/Reducer";
let store=createStore(Reducer)
export {store}