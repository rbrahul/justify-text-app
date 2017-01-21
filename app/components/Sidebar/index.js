import React, { Component } from 'react';
import { connect } from 'react-redux';

import HistoryCardItem from './HistoryCardItem';
import NoHistoryFoundMessage from './NoHistoryFoundMessage';
import FetchText from './FetchText';
import {
    fetchRandomText,
    restoreText,
    deleteText,
    setLineLength
} from '../../actions/JustifyTextActionCreator';

class Sidebar extends Component {
    renderHistory(historyTexts) {
        return historyTexts.map((textItem, index) => {
            return (<HistoryCardItem
                text={textItem}
                restoreText={this.props.restoreText}
                deleteText={this.props.deleteText}
                id={index}
                key={index}
                />);
        });
    }

    render() {
        const historyTexts = this.props.historyTexts;
        return (<div className="col s4 leftsidebar">
            <FetchText
            fetchRandomText={this.props.fetchRandomText}
            setLineLength={this.props.setLineLength}
            maximumLineLength={this.props.maximumLineLength}
            />
            <div className="text-center" style={{ 'paddingLeft': '15px' }}>
                <p className="white-text">History</p>
            </div>

            <div className="history-area">
                {
                    (historyTexts.length) ? this.renderHistory(historyTexts) :
                        <NoHistoryFoundMessage />
                }

            </div>
        </div>
        );
    }
}

Sidebar.propTypes = {
    fetchRandomText: React.PropTypes.func.isRequired
};

function mapStateAsProps(state) {
    return {
        historyTexts: state.justifyText.fetchedTexts,
        selectedTextindex: state.justifyText.seletedText,
        maximumLineLength: state.justifyText.maximumLineLength
    };
}

function mapDispatchAsProps(dispatch) {
    return {
        fetchRandomText() {
            dispatch(fetchRandomText());
        },
        restoreText(id) {
            dispatch(restoreText(id));
        },
        deleteText(id) {
            dispatch(deleteText(id));
        },
        setLineLength(lineLength) {
            dispatch(setLineLength(lineLength));
        }
    };
}

export default connect(mapStateAsProps, mapDispatchAsProps)(Sidebar);
