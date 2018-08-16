import React from 'react';

const Subscribe = () => {
  return (
      <div>
          <p>Subscribe to get our latest news</p>
          <form className="input-group mb-3">
              <input type="email" placeholder="Enter email" className="form-control form-control-sm"/>
              <div class="input-group-append">
                  <button type="submit" className="btn btn-primary">Send</button>
              </div>
          </form>
      </div>
  );
}

export default Subscribe;
