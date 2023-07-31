import { useState } from 'react';
import styles from './login.module.css';

import { useAuthState, useAuthDispatch } from '../../Context/context';
import { loginUser } from '../../Context/actions';


export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAuthDispatch() //get dispatch method from the useDispatch custom hook
    const { loading, errorMessage } = useAuthState()


    const handleLogin = async (e) => {
        e.preventDefault()
        let payload = { password, email }
        try {
            let response = await loginUser(dispatch, payload) //loginUser action makes the request and handles all state changes
            if (!response.user)
                return
            props.history.push('/dashboard') //navigate to dashboard on success
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Login Page</h1>
                {
                    errorMessage && <p className={styles.error}>{errorMessage.toString()}</p> 
                }
                <form>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='email'>Username</label>
                            <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>Login</button>
                </form>
            </div>
        </div>
    )
}