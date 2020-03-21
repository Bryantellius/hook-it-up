import React, { useState, useEffect } from "react";
import { cleanup } from "@testing-library/react";

const SinglePhoto = props => {
  const [photo, setPhoto] = useState([]);

  const getPhoto = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${props.match.params.photoid}`
    );
    let photo = await res.json();
    setPhoto(photo);
  };

  useEffect(() => {
    getPhoto();
    return cleanup();
  });

  if (photo.url === undefined) {
    return <h2>Loading ...</h2>;
  } else {
    return (
      <div className="row p-3 align-items-center">
        <button
          onClick={() => props.history.goBack()}
          className="btn btn-outline-primary btn-sm"
        >
          Back
        </button>
        <div className="card">
          <img
            className="img-fluid"
            src={photo.url}
            alt="Single Selected Media Post"
          ></img>
        </div>
      </div>
    );
  }
};

export default SinglePhoto;
