import { useState } from 'react';
import { Button } from '@mui/material';

const Expandable = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <>
            {isOpen && children}
            <Button variant="text" onClick={toggleOpen}>{isOpen ? 'Hide' : 'View article...'}</Button>
        </>
    )
}

export default Expandable;