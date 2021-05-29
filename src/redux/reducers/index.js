import { combineReducers } from "redux";
import { coursesReducer } from "./courses";
import { courseReducer } from "./course";
import { userReducer } from "./user";


export const reducers = combineReducers({
    courses: coursesReducer ,
    course: courseReducer ,
    user: userReducer

})