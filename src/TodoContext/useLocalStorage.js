import React  from  'react';


/* CustomHook para el manejo de localStorage */
function useLocalStorage(itemName, InitialState){
    /* Creamos un estado interno para no depender de el anterior y no depender de que se defina primero localStorage */
    const [item, setItem] = React.useState(InitialState);

    //Estado de carga
    const [loading,setLoading] = React.useState(true);
    //Estado de error
    const [error,setError] = React.useState(false);
    
    //Encapsulamos la funcion para llevar nuestros todos a localStorage en un useEffect
    React.useEffect(()=>{
            setTimeout(()=>{
                try {
                    /*  Variable que obtiene los "Todo" de localStorage */
                    const localStorageItems = localStorage.getItem(itemName);
                
                    /* Variable para parsear y poder leer los todos */
                    let parsedItem;
        
                    if (! localStorageItems) {
                        localStorage.setItem(itemName,JSON.stringify(InitialState));
                        parsedItem = InitialState;
                    } else {
                        parsedItem = JSON.parse(localStorageItems);
                        setItem(parsedItem);
                    }
        
                    setLoading(false);
                } catch (error) {
                    setError('Hay un error');
                    setLoading(false);
        
                }
            },3000)
        
    }, [itemName, InitialState]);
    //Como ahora la parte anterior sera asincrona, debemos modificar el estado inicial para no tener problemas
    

    /* Funcion para guardar cambios en el estado y en el localStorage simultaneamente */
    const saveChanges = (newItem) => {
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem);
    };
    return {
        item,
        saveChanges,
        loading,
        error
    }    
    
}

export {useLocalStorage};



//localStorage.removeItem('TODOCITOS_V1');
/* const defaultTodos =[
    {text: 'Cortar cebolla', completed: false},
    {text: 'Convertirme en el mejor Full stack de bogota, trabajar en mono con Juanca y Sebas, ser destacable y luego trabajar en Platzi y ayudar amas personas como yo', completed: true},
    {text: 'Comprarme un mac book', completed: false},
    {text: 'Bañar al gato', completed: true},
    {text: 'Use derivated states', completed: true}

];

//crear un item basado en nuestros todos:

    localStorage.setItem('TODOCITOS_V1', JSON.stringify(defaultTodos));

    JSON.parse('TODOCITOS_V1');

  //eliminar un item del localStorages
*/
