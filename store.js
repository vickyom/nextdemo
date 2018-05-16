import {createStore, applyMiddleware,compose} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from "next-redux-wrapper";
import thunk from 'redux-thunk';
import combineReducers  from "./combineReducers";

 

const makeStore = (options) => {
    return createStore(
        combineReducers,
        // initialState,
        compose( applyMiddleware(thunk), 
        (typeof(window) !== "undefined" && window.devToolsExtension) ? window.devToolsExtension() : f => f)
    );
};

export default makeStore