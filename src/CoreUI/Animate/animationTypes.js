import fadeUpDownAnimations from "./animations/fadeUpDown.module.scss";
import fadeInOutAnimations from "./animations/fadeInOut.module.scss";
import scaleUpDownAnimations from "./animations/scaleUpDown.module.scss";
import slideUpDownAnimations from "./animations/slideUpDown.module.scss";

const animationTypes = {
  fadeUpDown: {
    enter: fadeUpDownAnimations.fadeUpDownEnter,
    enterActive: fadeUpDownAnimations.fadeUpDownEnterActive,
    exit: fadeUpDownAnimations.fadeUpDownExit,
    exitActive: fadeUpDownAnimations.fadeUpDownExitActive,
  },
  scaleUpDown: {
    enter: scaleUpDownAnimations.scaleUpDownEnter,
    enterActive: scaleUpDownAnimations.scaleUpDownEnterActive,
    exit: scaleUpDownAnimations.scaleUpDownExit,
    exitActive: scaleUpDownAnimations.scaleUpDownExitActive,
  },
  slideUpDown: {
    enter: slideUpDownAnimations.slideUpDownEnter,
    enterActive: slideUpDownAnimations.slideUpDownEnterActive,
    exit: slideUpDownAnimations.slideUpDownExit,
    exitActive: slideUpDownAnimations.slideUpDownExitActive,
  },
  fadeInOut: {
    enter: fadeInOutAnimations.fadeInOutEnter,
    enterActive: fadeInOutAnimations.fadeInOutEnterActive,
    exit: fadeInOutAnimations.fadeInOutExit,
    exitActive: fadeInOutAnimations.fadeInOutExitActive,
  },
};

export default animationTypes;
