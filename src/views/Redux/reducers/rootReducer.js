import authReducer from "./authReducer";
import sitioWebReducer from "./sitioWebReducer";
import wappEscaneadoReducer from "./wappEscaneadoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    sitiosweb: sitioWebReducer,
    wappescaneado: wappEscaneadoReducer
})

export default rootReducer