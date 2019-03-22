import { combineReducers } from "redux";
import websites from './websites'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    websites,
    visibilityFilter
})