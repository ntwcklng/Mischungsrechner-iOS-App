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
      part2Value: 0
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
    this.setState({
      bottleValue: value
    });
  },


  render: function() {
    if(this.state.part1Value !== 0 && this.state.part2Value !== 0 && this.state.bottleValue !== 0) {
      calc = Calculate(parseInt(this.state.part1Value), parseInt(this.state.part2Value), this.state.bottleValue);
    } else {
      calc[0] = 0;
    }
    var resultOpacity = (calc[0] != 0) ? 1 : 0;
    return (
      <View style={Styles.container}>
        <PartPicker 
            val1Change={(value) => this.setState({part1Value: value})} 
            val2Change={(value) => this.setState({part2Value: value})}
            part1Value={this.state.part1Value}
            part2Value={this.state.part2Value}/>
        <View 
            style={{height:2, backgroundColor:'rgba(0,0,0,.1)', borderRadius: 10, marginTop: 20, marginBottom: 5}} />
        <BottlePicker bottlePickerValueChange={this.bottlePickerValueChange}/>
        
        <View style={{opacity: resultOpacity}}>
          <Result result={calc[0]} handlePress={this._ResultViewPress} />
        </View>
      </View>
    );
  }
});
module.exports = MischungsrechnerContent;