import { useState } from "react"
import { useDispatch } from "react-redux"
import { registrateThunk } from "store/auth/actions"

const RegistrateForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
    })

    const hangleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registrateThunk(formData))
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Enter your email </label>
                <input id="email" onChange={hangleChange} value={formData.email} name="email" type="text" />
            </div>


            <div>
                <label htmlFor="name">Enter your name </label>
                <input id="name" onChange={hangleChange} value={formData.name} name="name" type="text" />
            </div>

            <div>
                <label htmlFor="password">Enter your password </label>
                <input id="password" onChange={hangleChange} value={formData.password} name="password" type="password" />
            </div>

            <button>Registate</button>
        </form>
    )
}

export default RegistrateForm