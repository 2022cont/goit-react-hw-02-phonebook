import React from 'react';


export const ContactList = ({ contacts, onDeleteContact }) => (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>{name}:
                    <span>
                        {number}
                    </span>
                    <button
                        type='button'
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );



