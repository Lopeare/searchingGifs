import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../utilities/getGifs' // Ya no es necesario
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    /* Todo esto se puede meter en un custom Hook
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
    }

    useEffect(() => {
        getImages();
    }, [])
    */

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>


            { // Mensaje cargando sin que oculte o no el html. Solo lo pinte cuando cargue
                isLoading && <h1>Loading ... </h1>
            }


            <div className='card-grid'>
                {images.map(
                    (image) => //map sin return (se eliminan llaves y return)
                    (
                        <GifItem key={image.id}{...image} />
                    )
                )}
            </div>
        </>
    )
}
