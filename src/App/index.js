import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


import React from 'react';



function App() {
  
  /* console.log('Los usuarios buscan todos de '+ searchValue); */
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
