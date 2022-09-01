import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // Buena práctica tener siempre un estado inicial. Not undefined.
    const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        // Si la categoría existe, no hace nada. Se sale con el return.
        if (categories.includes(category)) return;
        setCategories([category, ...categories]);
    }

    return (
        <>
            <AddCategory
                onNewCategory={(inputValue) => onAddCategory(inputValue)}
            />
            {
                categories.map(category => {
                    return (
                        <GifGrid
                            // React request here for the key
                            key={category}
                            category={category}
                        />
                    )
                })
            }
        </>
    )
}
