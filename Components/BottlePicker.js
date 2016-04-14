var React = require('react-native');
var Styles = require('../Styles/BottlePicker');

var {
  View,
  Text,
  SegmentedControlIOS,
  TextInput,
  ScrollView
} = React;

var BottlePicker = React.createClass({
  getInitialState() {
    return {
      values: ['250ml', '473ml', '500ml', '1l', '15l', '20l'],
      bottleValue: 0,
      bumpedUp: 0
    };
  },
  componentWillReceiveProps(next) {
    this.setState({
      bottleValue: next.bottleValue,
    });
  },
  _onValueChange(value) {
    if(!value.match(/\d/g)) { value = null; }

    this.setState({
      bottleValue: value
    });
    this.props.bottlePickerValueChange(value);
  },
  render: function() {
    // onFocus={() => this.props.bump(true)}
    // onEndEditing={() => this.props.bump(false)}
    return (
        <View style={[Styles.container]}>
          <Text style={Styles.text}>Flaschen- bzw. Eimergröße in ml</Text>
          <TextInput
              onChangeText={this._onValueChange}
              value={this.state.bottleValue.toString()}
              style={Styles.input}
              keyboardType='number-pad'
              returnKeyType='done'
              clearButtonMode='always'
              selectTextOnFocus={true}
              onFocus={() => this.props.inputFocusScrollHandle(this.refs.bottlePicker)}
              placeholder='Sprühflasche, Eimer etc.'
              autoCorrect={false}
              ref='bottlePicker'

          />
          <Text style={Styles.text}>Häufig genutzte Größen</Text>
          <SegmentedControlIOS
              values={this.state.values}
              onValueChange={this._onValueChange}
              tintColor='#44bcff'
              momentary={true}
          />
          <View style={{height: this.state.keyboardSpace}} />
        </View>
    );
  }
});
module.exports = BottlePicker;
