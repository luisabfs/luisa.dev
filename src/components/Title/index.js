import React from 'react';
import PropTypes from 'prop-types';
import layer from '../../assets/images/layer.png';

import { Container } from './styles';

function Title({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
      <img src={layer} alt="" />
    </Container>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Title;
