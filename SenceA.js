'use strict';
var React = require('react-native');
var {
  TouchableNativeFeedback,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;
var SenceA = React.createClass({
  //touch事件回调
 touch: function(target:Object){
  this.props.navigator.push(
   {
    title:"B",
    name:"B"
   } 
  );
 },
 render: function() {
 	return (<View style={styles.container}>
      <TouchableNativeFeedback
       onPress={this.touch}>
       <View>
         <Text>' this is SenceA,click to SenceB'</Text>
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
    backgroundColor: '#F5FCFF',
  },
});
//导出场景，供外部require
module.exports = SenceA;