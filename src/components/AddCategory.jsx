import { useState } from "react"

// Este componente devuelve el valor valido a insertar al padre
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => { //event.target.value
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // No recargar la página
        event.preventDefault();
        const value = inputValue.trim();
        // Búsqueda válida con 3 o más caracteres
        // ó if( value.lenght > 3 ) return;
        if (value.length >= 3) {
            // Mandarle al padre lo que se ha escrito

            // *** Llamando al useStates del padre ********************
            //onNewCategory(categories => [inputValue, ...categories]);
            // ********************************************************

            onNewCategory(value);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder="Searching Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
