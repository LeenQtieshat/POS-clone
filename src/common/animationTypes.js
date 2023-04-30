import animations from "../styles/animations.module.scss";

const animationTypes = {
  slideUpDown: {
    enter: animations.slideUpDownEnter,
    enterActive: animations.slideUpDownEnterActive,
    exit: animations.slideUpDownExit,
    exitActive: animations.slideUpDownExitActive,
  },
};

export default animationTypes;
