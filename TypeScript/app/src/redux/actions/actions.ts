import axios from "axios";
import {Actions} from "./types";
import {Dispatch} from "redux";
import {Data, DispatchData} from "../../interfaces";




export const PushUserData = (username: string, password: string, email: string) => async (dispatch: Dispatch<DispatchData>) => {
    const response = await axios.post<Data>("http://127.0.0.1:8000/api/user/register", {
        username:username,
        password: password,
        email: email
    });
    dispatch({ type: Actions.PushAccountData, payload: response.data });
};
export const Login = (username: string, password: string) => async (dispatch: Dispatch<DispatchData>) => {
    const response = await axios.post<Data>("http://127.0.0.1:8000/api/token/", {
        username:username,
        password: password,
    });
    dispatch({ type: Actions.Authorize, payload: response.data });
}



export default { }
