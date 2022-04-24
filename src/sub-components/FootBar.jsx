import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const FootBar = () => {
    const { user } = useContext(UserContext);

    return (
        <footer>
            <h5 className='logged-in-as' >{user || 'Guest'}</h5>
        </footer>
    )
}

export default FootBar;