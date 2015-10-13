var React = require('react-native');
var MischungsrechnerContent = require('./MischungsrechnerContent');
var {
  View,
  Text,
  ScrollView
} = React;
var DefaultView = React.createClass({
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1}}>
        <ScrollView>
          <MischungsrechnerContent navi={this.props.navigator} />
        </ScrollView>
      </View>
    );
  }
});

module.exports = DefaultView;
