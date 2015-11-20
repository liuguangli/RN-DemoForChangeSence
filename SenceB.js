'use strict';
var React = require('react-native');
var {
  TouchableNativeFeedback,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

var SenceB = React.createClass({
 touch: function(target:Object){
   if (this.props.navigator.getCurrentRoutes().length>1) {
    this.props.navigator.pop();
   };
  
 },
 render: function() {
 	return (<View style={styles.container}>
      <TouchableNativeFeedback
       onPress={this.touch}>
       <View>
         <Text>' this is sence B,click to sence A'</Text>
       </View>  
      </TouchableNativeFeedback> 
      </View>);
 },
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFC00',
  },
});
module.exports = SenceB;