import React, { useState } from 'react';
import { ToggleModal } from './Toggle_Modal';


export const ModalDialouge = () => {

    const [ isModalOpen, setModalIsOpen ] = useState(false);

    console.log(useState("hello")[ 1 ]);
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    return (
        <main>
            { isModalOpen && <ToggleModal onRequestClose={ toggleModal } /> }
            <h1>React modal</h1>
            <p>
                This Pen shows an example of a controlled modal component built using React hooks, specifically <code>useState()</code> and <code>useEffect()</code>.
            </p>
            <p>Hit the button below to show the modal.</p>
            <button onClick={ toggleModal } type="button">
                Show the modal
            </button>
            <p>You'll find some great documentation about the <a target="_blank" href="https://reactjs.org/docs/hooks-state.html">state hooks</a> and the <a target="_blank" href="https://reactjs.org/docs/hooks-effect.html">effect hooks</a> in the official React documentation.</p>
            <p>The placeholders below take up vertical space in order to demonstrate that the <code>body</code> cannot be scrolled while the modal is open.</p>
            <div className="placeholder" />
            <div className="placeholder_large" />
            <div className="placeholder_medium" />
            <div className="placeholder" />
        </main>
    );

};
