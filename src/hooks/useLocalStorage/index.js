import { useState, useEffect }  from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const [item, setItem] = useState(initialValue);
  
    useEffect(()=>{
      setTimeout(()=>{
        try {
          // Traemos nuestros TODOs almacenados
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error)
        }
      }, 1000);
    }, [])
    
  
    const saveItem = (newItem) => {
      try {
        const stringifedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifedItem);
      setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    // return[item, saveItem]; solo se envia como array max 2 elementos, 
    // si son mas se usa un objeto. [estado, actualizador]
    return{
      item, 
      saveItem,
      loading,
      error
    };
  }

  export default useLocalStorage;