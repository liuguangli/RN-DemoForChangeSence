/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  TouchableNativeFeedback,
  Navigator,
  BackAndroid,
  StyleSheet,
  Text,
  View,
} = React;
var _navigator;
var SenceA = require('./SenceA');
var SenceB = require('./SenceB');
BackAndroid.addEventListener('harwardBackPress',() => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
      _navigator.pop();
      return true;
  };
  return false;
});
var RouteMapper = function(route,navigation,onComponent){
   _navigator = navigation;
    if (route.name === 'A') {
      return (
       <SenceA navigator={navigation} />
      );
    } else {
      return (
        <SenceB navigator={navigation} />
      );
    }
};
var ChangeSenceProject = React.createClass({
  render: function() {
    var initialRoute = {name:"A"};
    return (<Navigator 
     initialRoute={initialRoute}
     renderScene={RouteMapper}
     />)
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 80,
    height: 120,
  },
listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ChangeSenceProject', () => ChangeSenceProject);

