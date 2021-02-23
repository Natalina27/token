import React, {useState} from 'react';
import styles from './styles.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(credentials) {
        return fetch('https://api-nodejs-todolist.herokuapp.com/user/login',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json());
    }

    function setToken(userToken) {
       localStorage.setItem('token', JSON.stringify(userToken));
    }
    function setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    async function getUser(token) {
        const auth = {
            Authorization: token || '',
        };
        return fetch('https://api-nodejs-todolist.herokuapp.com/user/me', {
            method: 'GET',
            headers: auth
        })
            .then(data => data.json());

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        const user = await loginUser(userData);
        const {token} = user;
        console.log(token);
        setToken(token);
       const userMe =  await getUser(token);
        console.log(userMe);
        setUser(userMe);

    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={styles.wrap}>
                <div className={styles.form}>
                    <input type="email"
                           className={styles.input}
                           id="emailInput"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                           className={styles.input}
                           id="passwordInput"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.submit} type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default Login;