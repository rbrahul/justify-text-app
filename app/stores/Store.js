import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import justyfyTextApp from '../reducers/AppReducer';
import { getStoreFromLocalStorage } from './../utils/LocalStorageHelper.js';

const localyStoredData = getStoreFromLocalStorage();
const stateObject = {
	fetchedTexts: [],
	seletedText: 0,
	wordSeperator: '-',
	maximumLineLength: 100,
	justifiedText: '',
	showPreloader: false
};

let initialState={
	justifyText: localyStoredData? localyStoredData.justifyText : stateObject
};
const middleware = [thunk];
let extension = next => next;
extension = window.devToolsExtension ? window.devToolsExtension() :extension;
 
const store = createStore(
    justyfyTextApp,
    initialState,
    compose(applyMiddleware(...middleware), extension)
);

store.subscribe(() => {
	const state= store.getState();
	const localStore=JSON.stringify(state);
	localStorage.setItem('justifyText',localStore);
});

export default store;
