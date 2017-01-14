import * as types from '../constants/ActionTypes';
import store from '../stores/Store';
const faker = require('faker');

export function fetchRandomText() {
    const dummyText = faker.lorem.paragraphs();
     const lineLength = store.getState().justifyText.maximumLineLength;
    const maxWordLength = _countMaxWordLength(dummyText);
    if (lineLength < maxWordLength) {
        alert(`Line should be more than ${maxWordLength} character`);
        return {
            type: ''
        };
    }

    return (dispatch) => {
        dispatch(dispatchTextReceived(dummyText));
    }

}


export function restoreText(id) {
    const text = store.getState().justifyText.fetchedTexts[id];
    const lineLength = store.getState().justifyText.maximumLineLength;
    const maxWordLength = _countMaxWordLength(text);
    if (lineLength < maxWordLength) {
        alert(`Line should be more than ${maxWordLength} character`);
        return {
            type: ''
        };
    }

    return (dispatch) => {
        dispatch({
            type: 'RESTORE_TEXT',
            data: {
                id
            }
        });
    }
}

export function setLineLength(length) {
    return {
        type: 'SET_LINE_LENGTH',
        data: {
            length
        }
    };
}

export function deleteText(id) {
    return {
        type: 'DELETE_TEXT',
        data: {
            id
        }
    };
}

function _countMaxWordLength(paragraph) {
    const newLineTrimmedText = paragraph.trim().replace(/(\r\n|\n|\r)/gm, "");
    const words = newLineTrimmedText.split(/\s+/g);
    var wordLengthsArray = words.map(function (word) {
        return word.length;
    });

    var maxLengthWord = Math.max.apply(null, wordLengthsArray);
    return maxLengthWord;
}


function dispatchTextReceived(dummyText) {
    return {
        type: 'TEXT_RECIEVED',
        data: {
            text: dummyText
        }
    }
}