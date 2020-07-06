import {createStore, combineReducers} from "redux";
import {userCredentialReducer, MODULE_NAME as userCredentials} from "./userCredentials";
import { pointsReducer, MODULE_NAME as points} from "./points"
const rootReducer = combineReducers({
    [userCredentials] : userCredentialReducer,
    [points] : pointsReducer
});

const store = createStore(rootReducer);

export default store;
