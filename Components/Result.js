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
        <View style={{backgroundColor: '#44bcff', marginBottom: 8, padding: 10}}>
          <Text style={Styles.resultText}>12ml:2339ml</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'center'}}>
          <TouchableHighlight
              style={{borderWidth: 1, borderColor: '#44bcff', padding: 10, marginRight: 8, flex:1}}
              onPress={this._onClickReset}
              underlayColor='#9DDAFC'>
              <Text style={Styles.resetText}>Reset</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={{backgroundColor:'#44bcff', padding: 10, marginRight: 0, flex:1}}
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
