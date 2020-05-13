import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    padding: 5,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  overlay: {
    alignItems: 'center',
  },
  box: {
    alignSelf: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'pink',
    marginTop: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: '400',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 30,
  },
  headerBigTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    width: '90%',
    flexWrap: 'wrap',
  },
  cardGroupWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  column1: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 10,
  },
  column2: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    borderRadius: 14,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '300',
    alignSelf: 'center',
    color: 'white',
    marginTop: 10,
  },
});

export default styles;
