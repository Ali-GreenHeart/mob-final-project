const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const MODULE_NAME = "userCredentials";
const initialState = {
    fullName: null,
    mail: null,
    password: null,
    img: null
};


export function userCredentialReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOGIN: return {
            mail: payload.mail,
            password: payload.password,
            fullName: payload.fullName,
            img: payload.img
        };
        case LOGOUT: return {
            mail: null,
            password: null,
            fullName: null,
            img: null
        };
        default: return state;
    }
}


export const signIn = (payload) =>({
    type: LOGIN,
    payload
});
export const logout = () =>({
    type: LOGOUT
});
