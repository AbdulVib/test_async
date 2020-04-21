import React, { useContext, useEffect } from 'react'

import AppContext from '../../context/AppContext'

export default function Home() {
    const { state, dispatch, getPost } = useContext(AppContext)

    useEffect(() => {
        getPost()
    }, [])

    console.log(state, ' statewwwwwweeeee')
    return (
        <div>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
        </div>
    )
}
