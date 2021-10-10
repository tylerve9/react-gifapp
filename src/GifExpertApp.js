import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X']);
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