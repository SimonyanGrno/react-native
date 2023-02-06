import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#474eb1',
  },
  selected: {
    backgroundColor: '#2549db',
  },
  pressed: {
    backgroundColor: '#2565db',
  },
  text: {
    fontSize: 30,
    color: '#e9d7c4',
  },
});

export default styles;
