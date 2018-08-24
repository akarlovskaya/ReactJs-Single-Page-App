import React, {PropTypes} from 'react';
import './sponsors.css';

export const Sponsors = () => {
  return (
      <div className="sponsors">
          <h3>Sponsored by</h3>
          <div className="sponsors__imgWrapper">
              <img src="images/500px-logo.png" alt="500px logo"/>
              <img src="images/jekyll-logo.png" alt="Jekyll logo"/>
              <img src="images/logient.png" alt="Logient logo"/>
              <img src="images/mariadb.png" alt="Mariadb logo"/>
              <img src="images/salesforcedesk-logo.png" alt="Salesforcedesk logo"/>
              <img src="images/tink.png" alt="Tink logo"/>
              <img src="images/zendesk-logo.png" alt="Zendesk logo"/>
          </div>

          <a href="#">Become a sponsor</a>
      </div>
  );
}

export default Sponsors;
