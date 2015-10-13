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
  _onClickReset() {
    this.props.handlePressReset();
  },
  render: function() {
    return (
      <View style={{flex:1}}>
        <View style={Styles.results}>
          <Text style={Styles.resultText}>{this.props.result}</Text>
        </View>
        <View style={Styles.metaView}>
          <TouchableHighlight
              style={Styles.resetButton}
              onPress={this._onClickReset}
              underlayColor='#9DDAFC'>
              <Text style={Styles.resetText}>Reset</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={Styles.infoButton}
              underlayColor='#9DDAFC'
              onPress={this._onClick}>
              <Text style={Styles.text}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});
module.exports = Result;
// <TouchableHighlight
//     style={Styles.container}
//     onPress={this._onClick}
//     underlayColor='#9DDAFC'
// >
// <Text style={Styles.text}>
//   {this.props.result}
// </Text>
// </TouchableHighlight>
