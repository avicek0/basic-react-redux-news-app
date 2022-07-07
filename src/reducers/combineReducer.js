import {combineReducers} from "redux";
import { getNewsReducer } from "./index";

const rootReducer =combineReducers( {getNewsReducer});

export default rootReducer;

