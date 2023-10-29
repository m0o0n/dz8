import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginThunk } from "store/auth/actions"

const LoginForm = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const hangleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk(formData))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={hangleChange} value={formData.email} name="email" type="text" />
            <input onChange={hangleChange} value={formData.password} name="password" type="password" />
            <button>Login</button>
        </form>
    )
}

export default LoginForm