import {combineReducers} from "redux";
import {Actions} from "../actions/types";
import {Data, DispatchData, Tokens} from "../../interfaces";

const InitialState = {
    username: "Petro",
    email: "Mazepa",
    password: "412413413q21"
}

const LoginInit = {
   refresh: "",
    access: ""
}


const AccountReducer = (state = InitialState,action: DispatchData ) => {
    if (action.type === Actions.PushAccountData) {
        return {...state, payload: action.payload}
    }
    return {...state};
}


const LoginReducer = (state: Tokens = LoginInit, action: DispatchData) => {
    if (action.type === Actions.Authorize) {
        return {...state, payload: action.payload}
    }

    return {...state}
}


export const reducers = combineReducers({
AccountReducer,
    LoginReducer
})