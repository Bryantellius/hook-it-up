import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Posts from "./Posts";
import Photos from "./photo/Photos";
import SinglePhoto from "./photo/SinglePhoto";
import { cleanup } from "@testing-library/react";

const Content = props => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let photos = await res.json();
    setPhotos(photos);
  };

  useEffect(() => {
    getPhotos();
    return cleanup();
  }, []);

  return (
    <div className="card shadow">
      <div className="row justify-content-center my-3">
        <ul className="nav">
          <li className="nav-item">
            <p className="nav-link m-0">
              <strong>{props.user.username}</strong>
            </p>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark"
              to={`/${props.user.username}/posts`}
              activeClassName="nav-link text-dark border-bottom border-dark"
            >
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark"
              to={`/${props.user.username}/photos`}
              activeClassName="nav-link text-dark border-bottom border-dark"
            >
              Photos
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route
            path={`/${props.user.username}/photos/:photoid`}
            component={SinglePhoto}
          />
          <Route
            exact
            path={`/${props.user.username}/posts`}
            render={() => <Posts user={props.user} />}
          />
          <Route
            path={`/${props.user.username}/photos`}
            render={() => <Photos user={props.user} photos={photos} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Content;
