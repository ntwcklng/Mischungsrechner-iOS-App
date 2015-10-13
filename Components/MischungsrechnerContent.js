var React = require('react-native');
var Styles = require('../Styles/MischungsrechnerContent');
var BottlePicker = require('./BottlePicker');
var PartPicker = require('./PartPicker');
var Result = require('./Result');
var Calculate = require('./Calculate');
var ResultView = require('./ResultView');
var calc = [0,0];

var {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} = React;

var MischungsrechnerContent = React.createClass({
  getInitialState() {
    return {
      bottleValue: 0,
      part1Value: 0,
      part2Value: 0,
      bumpedUp: false
    };
  },
  _ResultViewPress() {
    this.props.navi.push({
      title: 'Mischungsverhältnis',
      component: ResultView,
      passProps: { result: calc[0], bottle: this.state.bottleValue, part1: this.state.part1Value, part2: this.state.part2Value }
    });
  },
  bottlePickerValueChange (value) {
    // if(!value) { return; }
    if(value === '15l' || value === '20l') {
      value = (parseInt(value)*1000).toString();
      value += 'l';
    }
    this.setState({
      bottleValue: value
    });
  },
  _resetResult() {
    this.setState({
      bottleValue: '',
      part1Value: '',
      part2Value: ''
    });
  },
  handleBump(bool) {
    this.setState({
      bumpedUp: bool
    });
  },
  render: function() {
    if(this.state.part1Value !== 0 && this.state.part2Value !== 0 && this.state.bottleValue !== 0) {
      calc = Calculate(parseInt(this.state.part1Value), parseInt(this.state.part2Value), this.state.bottleValue);
    } else {
      calc[0] = 0;
    }
    var resultOpacity = (calc[0] != 0) ? true : false;
    return (
      <View style={[Styles.container, this.state.bumpedUp && {marginBottom: 250, marginTop: -250}]}>
        <PartPicker
            val1Change={(value) => this.setState({part1Value: value})}
            val2Change={(value) => this.setState({part2Value: value})}
            part1Value={this.state.part1Value}
            part2Value={this.state.part2Value}
        />
        <View style={Styles.hr} />
        <BottlePicker
            bottlePickerValueChange={this.bottlePickerValueChange}
            bottleValue={this.state.bottleValue}
            bump={this.handleBump}
        />
        {resultOpacity && <Result result={calc[0]} handlePress={this._ResultViewPress} handlePressReset={this._resetResult}/>}
      </View>
    );
  }
});
module.exports = MischungsrechnerContent;
// <View style={{opacity: resultOpacity}}>
//   <Result result={calc[0]} handlePress={this._ResultViewPress} />
// </View>
