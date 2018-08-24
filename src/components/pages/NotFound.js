import React from 'react';

export default () => {
  return (
      <div className="container">
           <h1 className="display-4" style={h1Style}>404 Page Not Found</h1>
           <p className="lead">Sorry, that page does not exist</p>
       </div>

  );
}

const h1Style = {
    "textTransform": "none"
}
