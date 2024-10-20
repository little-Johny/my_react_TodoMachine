import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    }= React.useContext(TodoContext)

    function searching(search){
        /* console.log('Escribiste en el TodoSearch'); */
        setSearchValue(search.target.value);
    };
    
    

    return(
    <input 
        placeholder='Cortar anillos' 
        className="TodoSearch"
        value={searchValue}
        onChange={searching}
    />
    );  
}

export {TodoSearch};