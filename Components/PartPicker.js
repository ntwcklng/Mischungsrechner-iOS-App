var React = require('react-native');
var Styles = require('../Styles/PartPicker');

var {
  View,
  Text,
  TextInput,
  SegmentedControlIOS
} = React;

var BottlePicker = React.createClass({
  getInitialState() {
    return {
      values: ['1:2', '1:4', '1:10', '1:13', '1:20'],
      part1Value: undefined,
      part2Value: undefined,
    };
  },
  _onValueChange1(value) {
    this.setState({part1Value: value});
    this.props.val1Change(value);
  },
  _onValueChange2(value) {
    this.setState({part2Value: value});
    this.props.val2Change(value);
  },
  _onValueChangeSegment(value) {

    var splitVal = value.split(':');
    this.setState({
      part1Value: splitVal[0],
      part2Value: splitVal[1]
    });
    this._onValueChange1(splitVal[0]);
    this._onValueChange2(splitVal[1]);

  },
  render: function() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Verhältnis 1</Text>
        <TextInput
            onChangeText={this._onValueChange1}
            value={this.state.part1Value}
            style={Styles.input}
            keyboardType='default'
            returnKeyType='done'
            clearButtonMode='always'
            selectTextOnFocus={true}
        />
        <Text style={Styles.text}>Verhältnis 2</Text>
        <TextInput
            onChangeText={this._onValueChange2}
            value={this.state.part2Value}
            style={Styles.input}
            keyboardType='default'
            returnKeyType='done'
            clearButtonMode='always'
            selectTextOnFocus={true}
        />
        <Text style={Styles.text}>Beliebte Mischungsverhältnisse</Text>
        <SegmentedControlIOS
            values={this.state.values}
            onValueChange={this._onValueChangeSegment}
            tintColor='#44bcff'
            momentary={true}
        />
      </View>
    );
  }
});
module.exports = BottlePicker;
