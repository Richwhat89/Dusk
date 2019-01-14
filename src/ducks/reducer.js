import axios from 'axios';

const initialState = { 
    user: {},
    error: ''
}

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const GET_HERO = 'GET_USER';

export function login(username, password){
    return{
        type: LOGIN,
        payload: axios.post('/auth/login', {username, password})
    }
}

export function register(username, password, display_name, email){
    return{
        type: REGISTER,
    payload: axios.post('/auth/register', {username, password, display_name, email})
    }
}

export function getHero(){
    return{
        type: GET_HERO,
        payload: axios.get('/auth/hero')
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
        return{...state, user: action.payload.data};
        case LOGIN + '_REJECTED':
        return{...state, error: 'Unable to log in'};

        case REGISTER + '_FULFILLED':
        return{...state, user: action.payload.data};
        case REGISTER + '_REJECTED':
        return{...state, error: 'invalid'}

        case GET_HERO + '_FULFILLED':
        return{...state, user: action.payload.data};

        default:
        return state;
    }
}