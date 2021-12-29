import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ( {defaultCategories = ['Samurai X']}) => {

    const [categories, setCategories] = useState( defaultCategories);
    //'One Punch', , 'Dragon Ball'


    return (
        <>
            <h2>GifExpertApp</h2>
            <br />
            <AddCategory setCategories={setCategories} />
            <br />
            <hr />
            <br />
            <div>
                { categories.map(cat => <GifGrid key={cat} category={cat} />) }
            </div>
        </>
    );

}

export default GifExpertApp;