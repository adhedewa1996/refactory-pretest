import {
    GET_PARTNER,
    GET_PARTNER_SUCCESS,
    GET_PARTNER_FAILURE,
} from '../types';
import { onToken } from '../auth';
import { URL }  from '../../api';
import axios from 'axios';

//DETAIL TENTANG
export function fetchPartner() {
    return dispatch => {
        onToken().then(res => {
            const AuthStr = 'Bearer ' + res;
            dispatch(getPartner());
            axios.get(`${URL}partner.json`, {
                headers: {
                    Authorization: AuthStr
                }
            }).then(response => {
                dispatch(getPartnerSuccess(response.data.data));
            }).catch(err => dispatch(getPartnerFailure(err.response)));
        })
    }
}

function getPartner() {
    return {
        type: GET_PARTNER
    }
}

function getPartnerSuccess(partner) {
    return {
        type: GET_PARTNER_SUCCESS,
        payload: { partner }
    }
}

function getPartnerFailure(error) {
    return {
        type: GET_PARTNER_FAILURE,
        payload: { error }
    }
}