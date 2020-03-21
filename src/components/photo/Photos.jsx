import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { cleanup } from "@testing-library/react";

const Photos = props => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let photos = await res.json();
    setPhotos(photos);
  };

  useEffect(() => {
    getPhotos();
    return cleanup()
  }, []);

  return (
    <div className="row p-3">
      {photos.map(photo => {
        if (props.user.id === photo.albumId) {
          return (
            <div className="col-md-3 my-3" key={photo.id}>
              <Link to={`/${props.user.username}/photos/${photo.id}`}>
                <img
                  src={photo.thumbnailUrl}
                  alt="PhotoExample"
                  className="img-thumbnail"
                />
              </Link>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Photos;
