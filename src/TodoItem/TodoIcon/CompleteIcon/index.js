import React from 'react';
import { TodoIcon } from '../index';

function CompleteIcon({completed, onComplete}) {
    return(
        <TodoIcon
            type="complete"
            color={completed ? "#0073E6" : "#80BFFF"}
            onClick={onComplete}
        />
    )
}

export {CompleteIcon};