import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Unlock';
import Loader from 'react-loader-spinner'
import './unlock.css'

const UnlockPage = props => (
    <div className="center">
        <h1>MyBox!</h1>

        {
            props.loading &&
            <Loader type="Circles" color="brown" height={80} width={80} />
        }
        {
            !props.loading && 
            <button id="btn-unlock" className="btn btn-primary" onClick={props.startUnlock}>Unlock</button>
        }
    </div>
);

export default connect(
    state => state.unlock,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UnlockPage);
