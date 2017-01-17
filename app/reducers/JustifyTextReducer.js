import * as type from '../constants/ActionTypes';
import update from 'immutability-helper';
import JustifyString from '../utils/JustifyString';
import config from '../utils/config';


function justify(text, maximumLineLength, wordSeparator = null) {
	let justify = new JustifyString(text, maximumLineLength, wordSeparator);
	return justify.justifiedText(false); //false to get html formated space and new lines
}

function getCurrentIndex(items, id) {
	if (items[id + 1] !== undefined) {
		return id;
	} else if (items[id - 1] !== undefined) {
		return id - 1;
	} else {
		return 0;
	}
}

function getNextIndex(items, id) {
	if (items[id + 1] !== undefined) {
		return id + 1;
	} else if (items[id - 1] !== undefined) {
		return id - 1;
	} else {
		return 'NO INDEX';
	}
}

export function justifyText(state = {}, action) {
	switch (action.type) {
		case type.TEXT_RECIEVED:
			const currentFetchedTexts = state.fetchedTexts;
			const newFetchedTexts = [action.data.text, ...state.fetchedTexts].slice(0, 5);
			let justified = '';
			try {
				justified = justify(action.data.text, state.maximumLineLength, config.wordSeparator);
				console.log(justified);
			} catch (e) {
				console.error(e.message());
				justified = ''
			}

			return update(state, {
				fetchedTexts: { $set: newFetchedTexts },
				justifiedText: { $set: justified }
			});


		case type.RESTORE_TEXT:
			const text = state.fetchedTexts[action.data.id];
			return update(state, {
				seletedText: { $set: action.data.id },
				justifiedText: { $set: justify(text, state.maximumLineLength, config.wordSeparator) }
			});


		case type.SET_LINE_LENGTH:
			return update(state, {
				maximumLineLength: { $set: action.data.length }
			});

		case type.SHOW_PRELOADER:
			return update(state, {
				showPreloader: { $set: true }
			});

		case type.HIDE_PRELOADER:
			return update(state, {
				showPreloader: { $set: false }
			});

		case type.DELETE_TEXT:
			const currentIndex = getCurrentIndex(state.fetchedTexts, action.data.id);
			let textsArray = state.fetchedTexts;
			let currentText = '';
			let newJustifiedText = '';
			if (action.data.id === state.seletedText) {
				const nextIndex = getNextIndex(state.fetchedTexts, action.data.id)
				if (nextIndex !== 'NO INDEX') {
					currentText = textsArray[nextIndex];
				} else {
					currentText = '';
				}

				if (currentText.length) {
					newJustifiedText = justify(currentText, state.maximumLineLength, config.wordSeparator)
				}
			}

			return update(state, {
				fetchedTexts: { $splice: [[action.data.id, 1]] },
				seletedText: { $set: currentIndex },
				justifiedText: { $set: (action.data.id !== state.seletedText) ? state.justifiedText : newJustifiedText }
			});

		default:
			return state;
	}
}


export default justifyText;