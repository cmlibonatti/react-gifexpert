import { useState } from "react"

export const AddCategory = ( { onNewCategory, setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

     const onInputChange = ( {target} ) => {
        setInputValue( target.value );
     };

     const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1 ) {
            return;
        }
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( newInputValue );
        setInputValue('');
     };

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue }
                onChange= { (event) => onInputChange(event) }
            />
        </form>
    )
}