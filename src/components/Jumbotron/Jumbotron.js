import React from 'react';
import './jumbotron.css';

 const Jumbotron = () => {
  return (
      <div className="jumbotronBanner">
          <div className="jumbotronBanner__textWrapper container">
              <h1>FooBar Conference</h1>
              <p className="lead">Events for Developers</p>
          </div>

      </div>
  );
}

export default Jumbotron;

// const jumbotronBanner = {
//     backgroundImage: 'url("banner.jpg")'
// }
