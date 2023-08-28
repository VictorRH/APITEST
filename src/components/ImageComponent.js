import { useState, useEffect } from 'react';
import { fetchUrl } from '../actions/Fetch';
import UppercaseText from './UppercaseText';
import '../style/styleapp.css';
function ImageComponent() {
    const [petImage, setImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const imageUrl = await fetchUrl();
            setImage(imageUrl);
        }
        fetchData();
    }, []);

    return (
        <div>
            <UppercaseText text="ExampleAPI" />
            {petImage && <img src={petImage} alt="Pets" className='my-images' />}
        </div>

    )
}
export default ImageComponent;