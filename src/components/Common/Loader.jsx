import { useSelector } from "react-redux"

const Loader = ({children}) => {
    const isLoading = useSelector(state => state.auth.isLoading)
    return isLoading ? <p>Load..</p> : children
}

export default Loader