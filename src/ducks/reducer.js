import axios from 'axios';

const initialState = { 
    user: {},
    event: {},
    hero: {},
    monster: {},
    error: ''
}

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const GET_HERO = 'GET_HERO';
const EDIT = 'EDIT';
const GET_EVENT = 'GET_EVENT';
const GET_MONSTER = 'GET_MONSTER';

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

export function getHero(hero){
    return{
        type: GET_HERO,
        payload: hero
    }
}

export function getMonster(monster){
    return{
        type: GET_MONSTER,
        payload: monster
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

        case GET_EVENT + '_FULFILLED':
        return{...state, event: action.payload.data}

        case GET_EVENT + '_REJECTED':
        return{...state, error: 'question unavailable'}

        case GET_HERO:
        return{...state, hero: action.payload}

        case GET_MONSTER:
        return{...state, monster: action.payload}

        default:
        return state;
    }
}