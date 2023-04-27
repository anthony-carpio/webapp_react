import LoginForm from "./LoginForm"
import SchoolName from "./SchoolName"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = async ({username, password}) => {
        const response = await fetch("http://localhost:8000/users/")
        const data = await response.json()
        
        const user = data.filter(user => {
            return user.username === username && user.password === password
        })

        if(user.length === 0){
            alert('User not found!')
            return false
        }

        const user_info = user[0];
        if(user_info.level_num > 3) {
            navigate('/teacher')
        } else {
            navigate('/student')
        }
    }
    return (
        <div>
            <SchoolName />
            <LoginForm styleName="login" onSubmit={handleLogin} />
        </div>
    )
}



export default Login