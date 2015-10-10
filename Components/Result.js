var React = require('react-native');
var Styles = require('../Styles/Result');
var {
  View,
  Text,
  TouchableHighlight
} = React;

var Result = React.createClass({
  _onClick() {
    this.props.handlePress();
  },
  render: function() {
    return (
      <View>
        <TouchableHighlight 
            style={Styles.container} 
            onPress={this._onClick}
            underlayColor='#9DDAFC'
        >
        <Text style={Styles.text}>
          {this.props.result}
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
});
module.exports = Result;