import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID': '2b719952-c365-46bf-b04d-898e14577138', 'User-Name': username, 'User-Secret':password };
    try {
        // username | password => chatengine -> give messages
        await axios.get('https://api.chatengine.io/chats', {headers : authObject});
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.reload();
        // works out -> logged in

    }catch(error) {
        // error -> Try with new username
    }  
}

return(
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat App</h1>
            <form onSubmit={handleSubmit}></form>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
                <button type="submit" className="button"  >
                    <span>Start Chatting</span>
                </button>
            </div>
        </div>
    </div>
)

}


export default LoginForm;