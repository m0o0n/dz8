import { useState } from "react"
import { useDispatch } from "react-redux"
import { registrateThunk } from "store/auth/actions"

const Registate = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
    })

    const hangleChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registrateThunk(formData))
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={hangleChange} value={formData.email} name="email" type="text" />
            <input onChange={hangleChange} value={formData.name} name="name" type="text" />
            <input onChange={hangleChange} value={formData.password}  name="password" type="password" />
            <button>Registate</button>
        </form>
    )
}

export default Registate