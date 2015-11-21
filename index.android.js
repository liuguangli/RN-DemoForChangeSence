/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';//使用严格模式
// 引入react-native库
var React = require('react-native');
//声明要使用的组件
var {
  AppRegistry,
  TouchableNativeFeedback,
  Navigator,
  BackAndroid,
} = React;

var _navigator;
//引入场景文件
var SenceA = require('./SenceA');
var SenceB = require('./SenceB');
BackAndroid.addEventListener('harwardBackPress',() => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
      _navigator.pop();
      return true;
  };
  return false;
});
//Navigator跳转规则
var RouteMapper = function(route,navigation,onComponent){
   _navigator = navigation;
    if (route.name === 'A') {
      console.log("return SenceA");
      return (
       <SenceA navigator={navigation} />
      );
    } else if (route.name==="B"){
      console.log("return SenceB");
      return (
        <SenceB navigator={navigation} />
      );
    } 
};
// 创建入口逐渐
var ChangeSenceProject = React.createClass({
  render: function() {
    var initialRoute = {name:"A"};
    return (<Navigator 
     initialRoute={initialRoute}
     renderScene={RouteMapper}
     />)
  },

});
//注册项目
AppRegistry.registerComponent('ChangeSenceProject', () => ChangeSenceProject);

