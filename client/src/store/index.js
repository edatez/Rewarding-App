import React,{ createContext, useContext, useReducer } from "react";

import {
    LOGIN_USER,
    LOGOUT_USER,
    SET_USER
} from "./actions";

const StoreContext = createContext({
    userAuth: {},
});

const { Provider } = StoreContext;

const reducer = ( state, { type, payload } ) => {

    switch( type ) {
        case LOGIN_USER:

            return { ...state, userAuth: payload };

        case LOGOUT_USER:

            return { ...state, userAuth: undefined };

        case SET_USER:

            return{ ...state, user: payload}

        default:
            return state;
    }

}

export const getStoreAction = ( type, payload ) => {

    return { type, payload };

}

export const StoreProvider = ( { children } ) => {

    const [ store, dispatch ] = useReducer( reducer, {
        userAuth: undefined,
        user: null
    } );

    return <Provider value={[store, dispatch]}>{ children }</Provider>

}

export const useStoreContext = () => {

    return useContext( StoreContext );

}