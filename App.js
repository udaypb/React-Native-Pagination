/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppRegistry,StyleSheet,View,FlatList,Platform,Text} from 'react-native';
import ContactItem from './Pages/ContactItem';
import PaginationPage from './Pages/PaginationExample';
import HorizontalAdvancedFlatList from './Pages/HorizontalAdvancedFlatList';
import faker from 'faker';//assuming you have this.
import _ from 'lodash';
import Pagination,{Icon,Dot} from 'react-native-pagination';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return(
      <HorizontalAdvancedFlatList/>
    )
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
     
    
  }
}

