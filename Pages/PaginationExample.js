
import React, {Component} from 'react';
import {AppRegistry,StyleSheet,View,FlatList,Platform,Text} from 'react-native';
import ContactItem from './ContactItem';
import TweetItem from './TweetItem';
import faker from 'faker';//assuming you have this.
import _ from 'lodash';
import Pagination,{Icon,Dot} from 'react-native-pagination';


MockTweetList = new _.times(15, (i) => ({
    id: i,
    index: i,
    key: i,
    title: faker.name.jobTitle(),
    city: faker.address.city(),
    type: faker.name.jobType(),
    color: faker.internet.color(),
    description: faker.lorem.sentence(),
    // Image:faker.image.business(),
    image: faker.internet.avatar()
  }));

  export default class PaginationExample extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: MockTweetList
        // Selected: (new Map(): Map<string, boolean>),
      };
    }
    // Render list seen here [TODO ADD URL]
    _renderItem = ({ item }) => (<TweetItem
      index={item.id}
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.title}
      city={item.city}
      type={item.type}
      color={item.color}
      description={item.description}
      image={item.image}
    />);
    // Map to some key. We use the "id" attribute of each item in our list created in our MockTweetList
    _keyExtractor = (item, index) => item.id.toString()
    // REQUIRED for ReactNativePagination to work correctly
    onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({ viewableItems })
    render() {
      return (
        <View style={[ s.container ]}>
          <FlatList
              ref={r => this.refs = r}
              data={this.state.items}
              horizontal
              keyExtractor={this._keyExtractor}
              onViewableItemsChanged={this.onViewableItemsChanged}// Map your keys to whatever unique ids the have (mine is a "id" prop)
              pagingEnabled
              renderItem={this._renderItem}
          />
              <Pagination
          // DotThemeLight
            horizontal
            dotOnPress={(o) => console.log(' clicked: ', o)}
            hideEmptyDots
              pagingEnabled
            startDotIconFamily="Ionicons"
            startDotIconName="ios-arrow-back"
            endDotIconFamily="Ionicons"
            endDotIconName="ios-arrow-forward"
            dotIconName="ios-close"
              hideEmptyDots
            dotIconFamily="Ionicons"
            dotIconNameNotActive="logo-twitter"
            dotIconNameActive="logo-twitter"
            dotEmptyHide
            dotIconColorActive="white"
            dotIconColorNotActive="rgba(255,255,255,0.5)"
            // DotIconColorEmpty={"blue"}
            dotIconSizeActive={25}
            /*
             *  DotIconSizeNotActive={10}
             * StartDotIconSize={30}
             * EndDotIconSize={30}
             */
            listRef={this.refs}// To allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
            paginationVisibleItems={this.state.viewableItems}// Needs to track what the user sees
            paginationItems={this.state.items}// Pass the same list as data
            paginationItemPadSize={3}
          />
          </View>);
    }
  }
  const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey'// <-- use with "dotThemeLight"
    }
  });
  