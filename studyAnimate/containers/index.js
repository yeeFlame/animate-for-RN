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
import AnimateExamples from './animateExamples';
import StatePropsExample from './statePropsExamples';

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

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
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
                    title="state & props"
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
                        initialRoute={{ name: 'statePropsExample', component: StatePropsExample}}
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
                    title="LayoutAnimation & animated"
                    iconName="cube"
                    selectedIconName="cubes"
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
                    <Navigator
                        initialRoute={{ name: 'animateExample', component: AnimateExamples}}
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
                    <View style={{flex:1}}><Text>3</Text></View>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}
