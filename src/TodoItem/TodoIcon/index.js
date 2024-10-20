import React from 'react';
import { ReactComponent as CompleteSVG} from './CompleteIcon/Complete.svg';
import { ReactComponent as DeleteSVG} from './DeleteIcon/Delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "complete": (color) => <CompleteSVG 
                                className={"Icon-svg"} 
                                fill={color} 
                                stroke={color}  
                            />,
    "delete": (color) => <DeleteSVG 
                                className={"Icon-svg"} 
                                fill={color} 
                                stroke={color} 
                        />,
};

function TodoIcon({
    type, 
    color, 
    onClick 
}) {
    return(
        <span 
            className={`Icon-container Icon-container-${type}`} 
            onClick={onClick}    
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon};