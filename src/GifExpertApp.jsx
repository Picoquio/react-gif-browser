import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Astrophysics']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Searcher</h1>

            <AddCategory
                onNewCategory={evento => onAddCategory(evento)}
            />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
