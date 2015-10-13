/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var TitleBar = require('./Components/TitleBar');
// var MischungsrechnerContent = require('./Components/MischungsrechnerContent');
var Result = require('./Components/Result');
var HelpView = require('./Components/HelpView');
var DefaultView = require('./Components/MainView');
var ResultView = require('./Components/ResultView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS
} = React;



var Mischungsrechner = React.createClass({
  onRightButtonPress() {
    this.refs.nav.push({
      title: 'Hilfe',
      component: HelpView
    });
  },
  _bottlePickPress() {
    this.refs.nav.push({
      title: 'Bottle Picker View',
      component: BottlePickerView
    });
  },
  render: function() {
    return (
        <NavigatorIOS
            ref='nav'
            style={{flex: 1}}
            barTintColor='#44bcff'
            tintColor='#585858'
            titleTextColor='#585858'
            itemWrapperStyle={{backgroundColor: '#fbfbfb'}}
            initialRoute={{
              title: 'Mischungsrechner',
              component: DefaultView,
              rightButtonTitle: 'Hilfe',
              onRightButtonPress: this.onRightButtonPress
            }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Mischungsrechner', () => Mischungsrechner);
