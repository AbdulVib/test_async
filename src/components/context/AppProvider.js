import React, { useReducer } from 'react';
import axios from 'axios'

import AppContext from './AppContext'

import reducer, { initialState } from "../reducers/reducer";

export default function AppProvider(props) {

    const [ state, dispatch ] = useReducer(reducer, initialState )

    const getPost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res)
            .then(res => {
                dispatch({ type: 'GET_POST', payload: res.data})
            })
    }

    return (
        <AppContext.Provider value={{ state, dispatch, getPost }}>
            { props.children }
        </AppContext.Provider>
    )
}

