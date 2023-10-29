import { authHostInsance, baseHostInstance } from "api"

export const login = async (formData) => {
    const { data } = await baseHostInstance.post('users/login', formData)
    localStorage.setItem('token', data.token)
    console.log(data)
    return data
}

export const registrate = async (formData) => {
    const { data } = await baseHostInstance.post('users/signup', formData)
    localStorage.setItem('token', data.token)
    console.log(data)
    return data
}


export const logout = async () => {
    const { data } = await authHostInsance.post('users/logout')
    console.log(data)
    localStorage.setItem('token', '')
    return data
}

export const auth = async () => {
    const { data } = await authHostInsance.get('users/current')
    return data
}