import React from 'react';
import { CSSTransition } from 'react-transition-group';
import animationTypes from './animationTypes';
import { func, node, bool, number, object, array } from 'prop-types';

const Animate = ({ onEnter, onExit, nodeRef, showsIn, timeout = 200, animationType, children }) => {
  return (
    <CSSTransition
      in={showsIn}
      unmountOnExit
      timeout={timeout}
      classNames={animationTypes[animationType]}
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={nodeRef}
    >
      {children}
    </CSSTransition>
  );
};

Animate.propTypes = {
  onEnter: func,
  onExit: func,
  nodeRef: node,
  showsIn: bool,
  timeout: number,
  animationType: object,
  children: array
};

export default Animate;
