import { string } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
const { modalHeader } = styles;

const ModalHeader = ({ title }) => {
  return <div className={modalHeader}> {title} </div>;
};

ModalHeader.propTypes = {
  title: string
};

export default ModalHeader;
