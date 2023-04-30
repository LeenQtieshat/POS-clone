import { array, bool, number } from 'prop-types';
import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import animationTypes from '../../Animate/animationTypes';
import styles from './styles.module.scss';

const { tabsContent } = styles;

const TabBody = ({ tabs, currentTabIndex, switchState }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={switchState}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        classNames={animationTypes.fadeUpDown}
      >
        <div className={tabsContent}>{tabs[currentTabIndex].component}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

TabBody.propTypes = {
  tabs: array,
  currentTabIndex: number,
  switchState: bool
};

export default TabBody;
