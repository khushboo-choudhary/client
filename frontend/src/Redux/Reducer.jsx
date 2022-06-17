import { LOGIN_SUCCESS } from "./Action";

const initstate = {
    data : [],
    isAuth : false

}

export const reducer = (store = initstate , {type,payload}) => {
    console.log(store)
    switch (type){

        case LOGIN_SUCCESS:
             return {...store , data: payload, isAuth: true}

        default:
            return store
    }
}