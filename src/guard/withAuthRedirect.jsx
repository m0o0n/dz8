const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")

const WithAuthRedirect = ({children}) => {
    const auth = useSelector(state => state)
    return auth ? children : <Navigate to='/login' />
}

export default WithAuthRedirect