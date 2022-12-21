import React from 'react'
import { useState } from 'react'

function UseToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token'); // goes to the local storage, finds "token" and returns it
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }
    const [token, setToken] = useState(getToken());
    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token,
    }
}

export default UseToken