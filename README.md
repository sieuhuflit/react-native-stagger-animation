<h1 align="center">React Native Stagger Animation</h1>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)
[![npm version](https://img.shields.io/npm/v/react-native-stagger-animation.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-stagger-animation)
[![npm](https://img.shields.io/npm/dt/react-native-stagger-animation.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-stagger-animation)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="./gif/demo_ios.gif" alt="Demo" width="40%" />
  <img src="./gif/demo_android.gif" alt="Demo" width="40%"  />
</p>

<p align="center">
  <b>React native stagger animation</b></br>
  <sub>Use to create stagger animation effect for children view<sub>
</p>

<br />

## ➤ Installation

Add the dependency:

## ➤ Peer dependencies

- Using `animated-pose`

## ➤ Usage

```jsx
import StaggerAnimation, { Transition } from 'react-native-stagger-animation';

/**
 * Create stagger animation for header group
 */
const AnimatedStaggerHeader = StaggerAnimation.createAnimatedStagger();
const AnimatedViewHeader = StaggerAnimation.createAnimatedView({
  transitionType: 'easeInOut',
  duration: 900,
});

render() {
  // Visible state
  const { isVisible } = this.state;
  return (
    <Transition delayChildrenIn={150}>
      {isVisible && (
        <AnimatedStaggerHeader key="a">
          <AnimatedViewHeader>
            <Text>Hi Stephen</Text>
            <Image
              source={require('../assets/avatar.jpg')}
            />
          </AnimatedViewHeader>
          <AnimatedText>
            What sport are you going to play today ?
          </AnimatedText>
        </AnimatedStaggerHeader>
      )}
    </Transition>
  )
}
```

Note : The `Transition` is using to pass any props stagger animation

## ➤ Example

- Check the example folder, then type to the terminal

```bash
expo start
```

## ➤ Configuration

| Property              |   Type   |  Default   | Description                             |
| --------------------- | :------: | :--------: | --------------------------------------- |
| createAnimatedStagger | function | () => null | Create the animate stagger wrapper view |
| createAnimatedView    | function |  ()=>null  | Create View animation component         |
| createAnimatedText    | function |  ()=>null  | Create Text animation component         |

### ➤ Props

Transition type

- `spring`,
- `linear`,
- `easeIn`, `easeOut`, `easeInOut`
- `circIn`, `circOut`, `circInOut`
- `backIn`, `backOut`, `backInOut`
- `anticipate`

### Animate Spring configuration

| Property           |  Type   | Default | Description                                   |
| ------------------ | :-----: | :-----: | --------------------------------------------- |
| type               | string  | linear  | Create the animate stagger wrapper view       |
| stiffness?         | number  |   100   | Spring stiffness.                             |
| damping?           | number  |   10    | Strength of opposing force.                   |
| velocity?          | number  |    0    | Initial velocity.                             |
| overshootClamping? | boolean |  false  | Clamps any overshoot beyond the target value. |
| mass?              | number  |    1    | Mass of the moving object.                    |
| useNativeDriver    | boolean |  false  | Use native driver                             |

### Animate other transition type configuration

| Property        |   Type   | Default | Description                                   |
| --------------- | :------: | :-----: | --------------------------------------------- |
| type            |  string  | linear  | Create the animate stagger wrapper view       |
| duration        | function |   300   | Total duration of animation, in milliseconds. |
| useNativeDriver | boolean  |  false  | Use native driver                             |

## ➤ Author

Sieu Thai, sieuhuflit@gmail.com

## ➤ License

React Native Gradient Header Library is available under the MIT license. See the LICENSE file for more info.
