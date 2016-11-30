/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {
     AppRegistry,
     StyleSheet,
     Text,
     View,
     TabBarIOS,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 // import Icon from 'react-native-vector-icons/Ionicons'

 const styles = StyleSheet.create({
     tabContent: {
         flex: 1,
         alignItems: 'center',
     },
     tabText: {
         color: 'white',
         margin: 50,
     },
 });

 export default class studyAnimate extends Component {
     constructor(props) {
         super(props);
         this._renderContent = this._renderContent.bind(this);
         this.state = {
             selectedTab: 'redTab',
             notifCount: 0,
             presses: 0,
         }
     }

     _renderContent = (color, pageText, num) => {
         num = num || 0;
         return (
             <View style={[styles.tabContent, {backgroundColor: color}]}>
                 <Text style={styles.tabText}>{pageText}</Text>
                 <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
             </View>
         );
     }

     render() {
         // {this._renderContent('#414A8C', 'Blue Tab')}
         // {this._renderContent('#783e33', 'Red Tab', this.state.notifCount)}
         // {this._renderContent('#21551c', 'Green Tab', this.state.presses)}
         return (
             <TabBarIOS
                 unselectedTintColor="gray"
                 tintColor="#ee735c"
                 barTintColor="white"
             >
                 <Icon.TabBarItemIOS
                     title="代码"
                     iconName="code"
                     selectedIconName="file-code-o"
                     iconSize={30}
                     selected={this.state.selectedTab === 'blueTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'blueTab',
                         });
                     }}
                 >
                     <View style={{flex:1}}><Text>1</Text></View>
                 </Icon.TabBarItemIOS>
                 <Icon.TabBarItemIOS
                     title="game"
                     iconName="gamepad"
                     selectedIconName="trophy"
                     iconSize={30}
                    //  badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                     selected={this.state.selectedTab === 'redTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'redTab',
                             notifCount: this.state.notifCount + 1,
                         })
                     }}
                 >
                     <View style={{flex:1}}><Text>2</Text></View>
                 </Icon.TabBarItemIOS>
                 <Icon.TabBarItemIOS
                     title="..."
                     iconName="eercast"
                     selectedIconName="eercast"
                     iconSize={30}
                     selected={this.state.selectedTab === 'greenTab'}
                     onPress={()=> {
                         this.setState({
                             selectedTab: 'greenTab',
                             presses: this.state.presses + 1,
                         });
                     }}
                 >
                     <View style={{flex:1}}><Text>3</Text></View>
                 </Icon.TabBarItemIOS>
             </TabBarIOS>
         );
     }
 }

 AppRegistry.registerComponent('studyAnimate', () => studyAnimate);
