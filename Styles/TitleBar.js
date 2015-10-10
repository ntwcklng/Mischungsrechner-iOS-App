var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  titleBar: {
    backgroundColor: '#44bcff',
    paddingTop: 30,
    paddingBottom: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19
  }
});

module.exports = styles;