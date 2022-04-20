import { useState } from 'react';
import Button from '@mui/material';

const Expandable = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <>
            <Button variant="text" onClick={toggleOpen}>{isOpen ? 'Hide' : '...'}</Button>
            {isOpen && children}
        </>
    )
}

export default Expandable;