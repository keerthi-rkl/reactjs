import { createStore } from "redux"; 
import { rootReducer } from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension"
let store=createStore(rootReducer,composeWithDevTools())
export {store};
/*import { Crender } from "./Counter/Crender";
let store=createStore(Crender)
export {store}*/
