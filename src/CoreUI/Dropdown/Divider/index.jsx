import { bool } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

const { sharedDropdownDivider } = styles;

const Divider = ({ withDivider }) => {
  return withDivider && <hr className={sharedDropdownDivider} />;
};

Divider.propTypes = {
  withDivider: bool
};

export default Divider;
