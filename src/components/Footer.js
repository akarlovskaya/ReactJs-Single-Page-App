import React from 'react';

const Footer = () => {
  return (
      <footer style={footerStyle}>
          <small> &copy;2018 Anna Karlovskaya | For educational purpose</small>
      </footer>
  );
}

export default Footer;

const footerStyle = {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#331f1a',
    padding: '10px 0'
}
