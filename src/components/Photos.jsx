import React, { useState, useEffect } from 'react';

const Photos = (user) => {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/photos')
        let photos = await res.json();
        setPhotos(photos);
    }

    useEffect(() => {
        getPhotos();
    }, [])

    return (
        <div className='row p-3'>
            {photos.map(photo => {
                if (user.id === photo.albumId) {
                    return (
                        <div key={photo.id} className="col-md-3 my-3">
                            <img src={photo.thumbnailUrl} alt="PhotoExample" className='img-thumbnail' />
                        </div>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default Photos;