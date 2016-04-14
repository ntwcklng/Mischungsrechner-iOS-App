var React = require('react-native');
var MischungsrechnerContent = require('./MischungsrechnerContent');
var {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback
} = React;
var DefaultView = React.createClass({
  inputFocused (refName) {
    setTimeout(() => {
      let scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        React.findNodeHandle(refName),
        40, //additionalOffset
        true
      );
    }, 50);
  },
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1}}>
        <ScrollView keyboardShouldPersistTaps={false} ref='scrollView'>
          <MischungsrechnerContent navi={this.props.navigator} inputFocusScroll={(ref) => this.inputFocused(ref)} />
        </ScrollView>
      </View>
    );
  }
});

module.exports = DefaultView;
