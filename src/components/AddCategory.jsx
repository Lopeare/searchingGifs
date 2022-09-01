import { useState } from "react"

// This component returns the new value search to the father
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => { //event.target.value
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // Prevent reload page
        event.preventDefault();
        const value = inputValue.trim();

        // Valid search with 3 or more characteres
        if (value.length >= 3) {
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
