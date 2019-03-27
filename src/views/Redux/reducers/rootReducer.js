import authReducer from "./authReducer";
import sitioWebReducer from "./sitioWebReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    sitiosweb: sitioWebReducer
})

export default rootReducer