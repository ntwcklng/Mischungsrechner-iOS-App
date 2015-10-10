var React = require('react-native');
var Styles = require('../Styles/TitleBar');
var {
  View,
  Text
} = React;

var TitleBar = React.createClass({
  render: function() {
    return (
      <View style={Styles.titleBar}>
        <Text style={Styles.text}>
          Mischungsrechner
        </Text>
      </View>
    );
  }
});
module.exports = TitleBar;