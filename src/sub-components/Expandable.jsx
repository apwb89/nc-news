import { useState } from 'react';

const Expandable = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <>
            {isOpen && children}
            <button variant="text" onClick={toggleOpen}>{isOpen ? 'Hide' : 'Expand article...'}</button>
        </>
    )
}

export default Expandable;