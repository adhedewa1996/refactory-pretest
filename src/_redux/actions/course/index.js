import {
    GET_COURSE,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
} from '../types';
import { onToken } from '../auth';
import { URL }  from './../../api';
import axios from 'axios';

//DETAIL TENTANG
export function fetchCourse() {
    return dispatch => {
        onToken().then(res => {
            const AuthStr = 'Bearer ' + res;
            dispatch(getCourse());
            axios.get(`${URL}list-course.json`, {
                headers: {
                    Authorization: AuthStr
                }
            }).then(response => {
                dispatch(getCourseSuccess(response.data.data));
            }).catch(err => dispatch(getCourseFailure(err.response)));
        })
    }
}

function getCourse() {
    return {
        type: GET_COURSE
    }
}

function getCourseSuccess(course) {
    return {
        type: GET_COURSE_SUCCESS,
        payload: { course }
    }
}

function getCourseFailure(error) {
    return {
        type: GET_COURSE_FAILURE,
        payload: { error }
    }
}