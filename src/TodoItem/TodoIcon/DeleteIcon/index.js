import React from 'react';
import { TodoIcon } from '../index';

function DeleteIcon({onDelete}) {
    return(
        <TodoIcon
            type="delete"
            color="#A1232B"
            onClick={onDelete}
        />
    )
}

export {DeleteIcon};