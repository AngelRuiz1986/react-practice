import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
        
    const [categories, setCategories] = useState(["One Punch"]);
    return (
        <>
            <h2>Gift Expert App</h2>  
            <hr></hr>
            <AddCategory setCategories={setCategories}></AddCategory>
            {
                categories.map(category=> ( <GifGrid key={category} category={category}></GifGrid>))
            } 
        </>
    )
}

    //const handleAdd = () => 
    //{
      //  setCategories([...categories, 'HunterxHunters']);
   // }
   //<button onClick={handleAdd}> Agregar</button>
   //const categories = ["One Punch", "Samurai x", "Dragon all"];
