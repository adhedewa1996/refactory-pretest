import {
    GET_AS_SEEN_ON,
    GET_AS_SEEN_ON_SUCCESS,
    GET_AS_SEEN_ON_FAILURE,
} from '../types';
import { onToken } from '../auth';
import { URL }  from './../../api';
import axios from 'axios';

//DETAIL TENTANG
export function fetchSeenOn() {
    return dispatch => {
        onToken().then(res => {
            const AuthStr = 'Bearer ' + res;
            dispatch(getSeenOn());
            axios.get(`${URL}seen_on.json`, {
                headers: {
                    Authorization: AuthStr
                }
            }).then(response => {
                dispatch(getSeenOnSuccess(response.data.data));
            }).catch(err => dispatch(getSeenOnFailure(err.response)));
        })
    }
}

function getSeenOn() {
    return {
        type: GET_AS_SEEN_ON
    }
}

function getSeenOnSuccess(as_seen_on) {
    return {
        type: GET_AS_SEEN_ON_SUCCESS,
        payload: { as_seen_on }
    }
}

function getSeenOnFailure(error) {
    return {
        type: GET_AS_SEEN_ON_FAILURE,
        payload: { error }
    }
}