import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (evento) => {
        setInputValue(evento.target.value);
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} onBlur={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}
