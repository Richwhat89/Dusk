import axios from 'axios';

const initialState = { 
    user: {},
    event: {},
    hero: {},
    data: [],
    monster: {},
    dungeon: {},
    getData: {},
    error: ''
}

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const EDIT = 'EDIT';
const GET_USER = 'GET_USER';
const GET_HERO = 'GET_HERO';
const GET_EVENT = 'GET_EVENT';
const GET_MONSTER = 'GET_MONSTER';
const GET_DUNGEON = 'GET_DUNGEON';
const GET_DATA = 'GET_DATA';
const CHANGE_USER = 'CHANGE_USER';

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

export function getUser(id){
    return{
        type: getUser,
        payload: axios.get('/auth/users', id)
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

export function getDungeon(dungeon){
    return{
        type: GET_DUNGEON,
        payload: dungeon
    }
}

export function getData(id){
    return{
        type: GET_DATA,
        payload: axios.get(`/api/analytics/${id}`)
    }
}

export function changeUser(){
return{
    type: CHANGE_USER,
    payload: {}
    }
}


export default function reducer(state=initialState, action){
    console.log(action.type, action.payload)
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

        case GET_USER + '_FULFILLED':
        return{...state, user: action.payload.data};

        case GET_USER - '_REJECTED':
        return{...state, error: 'no user'}

        case GET_EVENT + '_FULFILLED':
        return{...state, event: action.payload.data}

        case GET_EVENT + '_REJECTED':
        return{...state, error: 'question unavailable'}

        case GET_DATA + '_FULFILLED':
        return{...state, data: action.payload.data};

        case GET_DATA - '_REJECTED':
        return{...state, error: 'no user'}

        case GET_HERO:
        return{...state, hero: action.payload}

        case GET_MONSTER:
        return{...state, monster: action.payload}

        case GET_DUNGEON:
        return{...state, dungeon: action.payload}

        case CHANGE_USER:
        return{...state, user: action.payload}

        default:
        return state;
    }
}