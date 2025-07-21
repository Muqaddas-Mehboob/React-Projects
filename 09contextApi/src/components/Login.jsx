// 🔁 Provider is used once at the top to give access.
// 🔍 Context is used wherever you want to read or update the shared data.


import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // Why object Destructuring in useContext hook?
    // Because it will return an object like this.
    // {
    //     user: someUserValue,
    //     setUser: someFunction
    // }

    const { setUser } = useContext(UserContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>

            <input
                value={username}
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'>

            </input>

            <input

                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'>

            </input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login

