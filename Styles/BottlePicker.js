var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#44bcff',
    height: 40,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: '#585858'
  }
});

module.exports = styles;
