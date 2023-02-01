import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <>
            <span>La página que busca o la url ingresada no existe. Por favor visite Home</span>
            <Link to='/'>Home</Link>
        </>
    )
}

export default NotFound;