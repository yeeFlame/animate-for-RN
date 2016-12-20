/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/03 11:08:45
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:38:07
*/


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Navigator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Examples from './examples';
import Plugins from './plugins'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'greenTab',
            notifCount: 0,
            presses: 0,
        }
    }

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="gray"
                tintColor="#ee735c"
                barTintColor="white"
            >
                <Icon.TabBarItemIOS
                    title="codes"
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
                    <Navigator
                        initialRoute={{ name: 'examples', component: Examples}}
                        configureScene={(route) =>{
                            return Navigator.SceneConfigs.FloatFromRight
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
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
                    <Navigator
                        initialRoute={{ name: 'plugins', component: Plugins}}
                        configureScene={(route) =>{
                            return Navigator.SceneConfigs.FloatFromRight
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}
