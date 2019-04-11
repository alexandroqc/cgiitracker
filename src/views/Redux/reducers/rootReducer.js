import authReducer from "./authReducer";
import sitioWebReducer from "./sitioWebReducer";
import wappEscaneadoReducer from "./wappEscaneadoReducer";
import detalleSitioWebReducer from "./detalleSitioWebReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    sitiosweb: sitioWebReducer,
    wappescaneado: wappEscaneadoReducer,
    detallesitioweb: detalleSitioWebReducer
})

export default rootReducer