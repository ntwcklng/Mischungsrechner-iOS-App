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
      values: ['250ml', '473ml', '500ml', '1000ml', '15l', '20l'],
      bottleValue: 0,
      bumpedUp: 0
    };
  },
  componentWillReceiveProps(next) {
    this.setState({
      bottleValue: next.bottleValue,
    });
  },
  _onFocus() {
    var scrollView = this.refs.bottleInput.getScrollResponder();
    var scrollResponder = scrollView.getScrollRef();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      React.findNodeHandle(this.refs.bottleInput),
      0, // adjust depending on your contentInset
      /* preventNegativeScrollOffset */ true
    );
  },
  _onValueChange(value) {
    // value = value.toString();
    this.setState({
      bottleValue: value
    });
    this.props.bottlePickerValueChange(value);
  },
  render: function() {
    return (
      <View style={[Styles.container]}>
      <Text style={Styles.text}>Flaschengröße in ml</Text>
      <TextInput
          onChangeText={this._onValueChange}
          value={this.state.bottleValue}
          style={Styles.input}
          keyboardType='default'
          returnKeyType='done'
          clearButtonMode='always'
          selectTextOnFocus={true}
          onFocus={() => this.props.bump(true)}
          onEndEditing={() => this.props.bump(false)}
          placeholder='Sprühflasche, Eimer etc'
          autoCorrect={false}
      />
        <Text style={Styles.text}>Beliebte Flaschengrößen</Text>
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
