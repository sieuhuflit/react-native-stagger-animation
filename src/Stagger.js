import posed from './posed';

/**
 * Transition type
 */
const TRANSITION_TYPE = {
  SPRING: 'spring',
  EASE_IN_OUT: 'easeInOut',
  LINEAR: 'linear',
};

function createAnimatedStagger() {
  return posed.View({
    enter: {
      y: 0,
      delayChildren: ({ delayChildrenIn = 50 }) => delayChildrenIn,
      staggerChildren: ({ staggerChildrenIn = 50 }) => staggerChildrenIn,
    },
    exit: {
      y: '100vh',
      delay: ({ delayExit = 10000 }) => delayExit,
      staggerChildren: ({ staggerChildrenOut = 120 }) => staggerChildrenOut,
    },
  });
}

function createAnimatedView({
  transitionType = TRANSITION_TYPE.LINEAR,
  duration,
  velocity,
  stiffness,
  damping,
  overshootClamping,
  mass,
  useNativeDriver,
}) {
  switch (transitionType) {
    case TRANSITION_TYPE.SPRING:
      return posed.View({
        enter: {
          x: 0,
          opacity: ({ opacity = 1 }) => opacity,
          transition: {
            type: 'spring',
            stiffness,
            damping,
            velocity,
            overshootClamping,
            mass,
            useNativeDriver,
          },
        },
        exit: {
          x: 100,
          opacity: 0,
        },
      });
    default:
      return posed.View({
        enter: {
          x: 0,
          opacity: ({ opacity = 1 }) => opacity,
          transition: {
            ease: transitionType,
            duration,
            useNativeDriver,
          },
        },
        exit: {
          x: 100,
          opacity: 0,
        },
      });
  }
}

function createAnimatedText({
  transitionType = TRANSITION_TYPE.LINEAR,
  duration,
  velocity,
  stiffness,
  damping,
  overshootClamping,
  mass,
  useNativeDriver,
}) {
  switch (transitionType) {
    case TRANSITION_TYPE.SPRING:
      return posed.Text({
        enter: {
          x: 0,
          opacity: ({ opacity = 1 }) => opacity,
          transition: {
            type: 'spring',
            stiffness,
            damping,
            velocity,
            overshootClamping,
            mass,
            useNativeDriver,
          },
        },
        exit: {
          x: 100,
          opacity: 0,
        },
      });
    default:
      return posed.Text({
        enter: {
          x: 0,
          opacity: ({ opacity = 1 }) => opacity,
          transition: {
            ease: transitionType,
            duration,
            useNativeDriver,
          },
        },
        exit: {
          x: 100,
          opacity: 0,
        },
      });
  }
}

const Stagger = {
  createAnimatedStagger,
  createAnimatedView,
  createAnimatedText,
};

export default Stagger;
