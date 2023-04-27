import { useState } from "react"

const LoginForm = ({ onSubmit, styleName }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !password) {
            alert("Username or password is required!")
            return false
        }
        const credentials = {
            username: username,
            password: password
        }
        onSubmit(credentials);
    }
    return (
        <div className={styleName}>
            <form className='login-form'>
                <div className="form-control">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="username">Password:</label>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input className="btn" type="submit" value='Login' onClick={(e) => handleSubmit(e)} />
            </form>
        </div>

    )
}

export default LoginForm