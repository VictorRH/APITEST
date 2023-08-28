import { useState } from 'react';
import '../style/styleapp.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const verifiedDataLogin = () => {
        //verificard login de acuerdo a su necesidad
        console.log("data username", username);
        console.log("data password", password);

    }
    return (
       
            <div className='login-container'>
                <h2>Welcome</h2>
                <input type="text" placeholder="UserName" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button onClick={verifiedDataLogin}>Login</button>
            </div>

        
    )


}
export default Login;