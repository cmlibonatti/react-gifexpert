import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);

  const onAddcategory = ( newCategory ) => {

    if (categories.some(cat => {
        return cat.toLowerCase() === newCategory.toLowerCase();
      }) )
    {
      return;
    }
    setCategories( [newCategory, ...categories] );
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        setCategories = { setCategories } 
        onNewCategory = { (event) => onAddcategory(event) }
      />

      { 
        categories.map( (category) => (
            <GifGrid 
              key={ category } 
              category={ category } />
          ) ) 
      }

    </>
  )
}
