import React from 'react';
import { useFecthGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category ).then( setImages );
    // }, [ category ]);

    // <div>
    //             { images.map( {id, title} => ( 
    //                 <p key={ img.id } > { img.title } </p> 
    //             )) }
    //         </div>

    const { data: images, loading } = useFecthGifs(category);


    return (
        <div>
            <h3 className="animate__animated animate__fadeInUpBig "> {category} </h3>
            {loading &&
                <p className=" animate__animated animate__fadeInUpBig">loading...</p>}
            {<div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>}
        </div>
    );

}

export default GifGrid;