import { baseHostInstance } from "api"

export const login = async () => {

}

export const registrate = async (formData) => {
    const data = await baseHostInstance.post('users/signup', formData)
    console.log(data)
    return data
}


export const logout = async () => {
    
}

export const fetchUserInfo = async () => {

}