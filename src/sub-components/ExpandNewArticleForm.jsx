import { useState } from 'react';

const ExpandNewArticleForm = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <>
        {isOpen && children}
        <button variant="text" onClick={toggleOpen}>{isOpen ? 'Hide' : 'Post New Article'}</button>
        </>
    )
}

export default ExpandNewArticleForm;