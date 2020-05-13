import * as React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StaggerAnimation, { Transition } from 'react-native-stagger-animation';
import styles from './styles';

/**
 * Header
 */
const AnimatedStaggerHeader = StaggerAnimation.createAnimatedStagger();
const AnimatedViewHeader = StaggerAnimation.createAnimatedView({
  transitionType: 'easeInOut',
  duration: 900,
});
const AnimatedText = StaggerAnimation.createAnimatedText({
  transitionType: 'easeIn',
  duration: 900,
});

/**
 * Card
 */
const AnimatedStaggerCard = StaggerAnimation.createAnimatedStagger();
const AnimatedViewCard = StaggerAnimation.createAnimatedView({
  transitionType: 'spring',
  stiffness: 100,
  damping: 9,
});

export default class App extends React.Component {
  state = {
    isVisible: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 100);
  };

  renderHeader = () => {
    const { isVisible } = this.state;
    return (
      <Transition delayChildrenIn={150}>
        {isVisible && (
          <AnimatedStaggerHeader key="a">
            <AnimatedViewHeader style={styles.headerWrapper}>
              <Text style={styles.headerTitle}>Hi Stephen</Text>
              <Image
                style={styles.avatar}
                source={require('../assets/avatar.jpg')}
              />
            </AnimatedViewHeader>
            <AnimatedText style={styles.headerBigTitle} numberOfLines={2}>
              What sport are you going to play today ?
            </AnimatedText>
          </AnimatedStaggerHeader>
        )}
      </Transition>
    );
  };

  renderList = () => {
    const { isVisible } = this.state;
    const AnimatedWrapper = StaggerAnimation.createAnimatedStagger();
    const AnimatedViewBox = StaggerAnimation.createAnimatedView({
      transitionType: 'spring',
    });
    return (
      <Transition>
        {isVisible && (
          <AnimatedWrapper>
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
            <AnimatedViewBox style={styles.box} />
          </AnimatedWrapper>
        )}
      </Transition>
    );
  };

  renderCardGroup = () => {
    const { isVisible } = this.state;
    return (
      <Transition
        delayChildrenIn={900}
        staggerChildrenIn={330}
        staggerChildrenOut={200}
      >
        {isVisible && (
          <AnimatedStaggerCard style={styles.cardGroupWrapper} key="b">
            <View style={styles.column1}>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/1.png')}
                />
                <Text style={styles.cardDescription}>Running</Text>
              </AnimatedViewCard>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/2.png')}
                />
                <Text style={styles.cardDescription}>Soccer</Text>
              </AnimatedViewCard>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/3.png')}
                />
                <Text style={styles.cardDescription}>Biking</Text>
              </AnimatedViewCard>
            </View>
            <View style={styles.column2}>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/4.png')}
                />
                <Text style={styles.cardDescription}>Hiking</Text>
              </AnimatedViewCard>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/5.png')}
                />
                <Text style={styles.cardDescription}>Basketball</Text>
              </AnimatedViewCard>
              <AnimatedViewCard style={styles.flex1}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../assets/card/6.png')}
                />
                <Text style={styles.cardDescription}>Golf</Text>
              </AnimatedViewCard>
            </View>
          </AnimatedStaggerCard>
        )}
      </Transition>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#654ea3', '#ee9ca7']}
          style={styles.backgroundGradient}
        />
        <ScrollView contentContainerStyle={styles.content}>
          <StatusBar barStyle="light-content" />
          {this.renderHeader()}
          {this.renderCardGroup()}
          {/* {this.renderList()} */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
