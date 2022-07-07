import {createStore} from 'redux';
import rootReducer from "./reducers/combineReducer";

const Store = createStore (rootReducer);

export default Store;