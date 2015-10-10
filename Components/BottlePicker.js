var React = require('react-native');
var Styles = require('../Styles/BottlePicker');

var {
  View,
  Text,
  SegmentedControlIOS,
  TextInput
} = React;

var BottlePicker = React.createClass({
  getInitialState() {
    return {
      values: ['100', '200', '250', '437', '500', '1000'],
      bottleValue: undefined
    };
  },
  _onValueChange(value) {
    this.setState({
      bottleValue: value
    });
    this.props.bottlePickerValueChange(value);
  },
  render: function() {
    return (
      <View style={Styles.container}>
      <Text style={Styles.text}>Flaschengröße in ml</Text>
      <TextInput
          onChangeText={this._onValueChange}
          value={this.state.bottleValue}
          style={Styles.input}
          keyboardType='default'
          returnKeyType='done'
          clearButtonMode='always'
          selectTextOnFocus='true'
      />
        <Text style={Styles.text}>Beliebte Flaschengrößen</Text>
        <SegmentedControlIOS
            values={this.state.values}
            onValueChange={this._onValueChange}
            tintColor='#44bcff'
        />
      </View>
    );
  }
});
module.exports = BottlePicker;