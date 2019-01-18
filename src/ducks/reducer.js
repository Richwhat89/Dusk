import axios from 'axios';

const initialState = { 
    user: {},
    event: {},
    error: ''
}

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const GET_HERO = 'GET_USER';
const EDIT = 'EDIT';
const GET_EVENT = 'GET_EVENT';

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

export function edit(username, password, display_name, email){
    return{
        type: EDIT,
        payload: axios.put('/auth/edit', {username, password, display_name, email})
    }
}

export function getHero(){
    return{
        type: GET_HERO,
        payload: axios.get('/auth/hero', )
    }
}

export function event(question, answer){
    return{
        type: GET_EVENT,
        payload: axios.get('/api/events', {question, answer})
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

        case EDIT + '_FULFILLED':
        return{...state, user: action.payload.data};
        case EDIT + '_REJECTED':
        return{...state, error: 'invalid'}

        case GET_HERO + '_FULFILLED':
        return{...state, user: action.payload.data};

        case GET_EVENT + '_FULFILLED':
        return{...state, event: action.payload.data}

        case GET_EVENT + '_REJECTED':
        return{...state, error: 'question unavailable'}

        default:
        return state;
    }
}