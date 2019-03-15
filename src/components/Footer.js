import React from 'react';

import gatsby from '../img/footer/gatsby.svg';
import netlify from '../img/footer/netlify.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-light ">
          <img
            className="fas fa-lg"
            src={gatsby}
            alt="Gatsby"
            style={{ width: '1em', height: '1em', 'margin-right': '0.5em' }}
          />
          <img
            className="fas fa-lg"
            src={netlify}
            alt="Netlify"
            style={{ width: '1em', height: '1em', 'margin-left': '0.5em' }}
          />
          <div className="is-size-7" style={{ 'margin-bottom': '1.5em' }}>
            &copy; Imogen Hardy 2019
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
