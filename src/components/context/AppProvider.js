import React, { useReducer } from 'react';
import axios from 'axios'

import AppContext from './AppContext'

import reducer, { initialState } from "../reducers/reducer";

export default function AppProvider(props) {

    const [ state, dispatch ] = useReducer(reducer, initialState )

    const getPost = () => {
        axios.get('http://localhost:5000/posts')
            .then(res => res)
            .then(res => {
                dispatch({ type: 'SENDING_REQUEST' })
                dispatch({ type: 'REQUEST_FINISHED' })
                dispatch({ type: 'SET_POST', payload: res.data })
            })
            .catch(err => console.log(err, ' errrr'))
    }

    const getSinglePost = (id) => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(res => res)
            .then(res => {
                dispatch({ type: 'SET_SINGLE_POST', payload: res.data })
            })
            .catch(err => console.log(err, ' errrr'))
    }

    return (
        <AppContext.Provider value={{ state, dispatch, getPost, getSinglePost }}>
            { props.children }
        </AppContext.Provider>
    )
}

