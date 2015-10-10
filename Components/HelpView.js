var React = require('react-native');
// var Styles = require('../Styles/HelpView');
var {
  View,
  Text
} = React;

var HelpView = React.createClass({
  render: function() {
    return (
      <View style={{flex:1, padding: 20, paddingTop:74, backgroundColor:'#fbfbfb'}}>
        <Text style={{fontSize: 18}}>
          Viele Produkte in der Autopflege und in anderen Bereichen sind stark konzentriert und müssen erst mit Wasser gemischt werden.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Trage deine gewünschten Mischungsverhältnisse (z.B. 1:4, 1:25, 1:200 etc) in die ersten beiden Eingabefelder ein, oder wähle eine der beliebten und häufig genutzten Mischungsverhältnisse aus.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Damit das Mischungsverhältnis berechnet werden kann, musst du im nächsten Eingabefeld deine Flaschengröße in ml angeben. Alternativ wählst du in der Auswahl darunter eine Größe aus.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Wenn du alle Daten korrekt eingegeben hast, wird dir dein Mischungsverhältnis in einen blauen Button angezeigt. Du kannst diesen anklicken um mehr über das Verhältnis zu erfahren.
        </Text>
        
      </View>
    );
  }
});
module.exports = HelpView;