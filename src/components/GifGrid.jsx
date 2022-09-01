import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../utilities/getGifs' // Not need since we use useFetchGifs.js Custom Hook
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {   // Only print when loading
                isLoading && <h1>Loading ... </h1>
            }

            <div className='card-grid'>
                {images.map(
                    (image) =>
                    (
                        <GifItem key={image.id}{...image} />
                    )
                )}
            </div>
        </>
    )
}
