import React from 'react';
import PropTypes from 'prop-types';

import HomeTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContainer';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const PagePage = ({ children }) => (
  <HomeTemplate
    header={<HeaderContainer />}
  >
    { children }
  </HomeTemplate>
);

PagePage.propTypes = propTypes;

export default PagePage;
