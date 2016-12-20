/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/19 15:34:24
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/19 15:34:29
*/


import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Header from '../Header';
import Box from '../Box';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    scroll: {
        flex: 1,
        // borderWidth: 1,
        marginBottom: 50,
    },
    box: {
        height: 200,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D6DCDF',
        backgroundColor: '#f5fcff',
        marginBottom: 10,
        paddingBottom: 20,
    },
    animateView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxBtn: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    flexBox:{
        flex:1,
        // height:800,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
    underline:{
        backgroundColor:'red',
    },
});

export default class scrollTabViewDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollText:''
        }
        this._renderTabView = this._renderTabView.bind(this);
    }

    _renderTabView(){
        return(
            <View style={styles.animateView}>
                <ScrollableTabView
                    renderTabBar={(tabBarProps) =>{
                        console.log(tabBarProps);
                        return (<DefaultTabBar />)
                    }}
                    tabBarPosition="top"
                    onChangeTab={(i)=> {
                        this.setState({
                            scrollText: `{i:${i.i},from:${i.from}}`,
                        })
                    }}
                    initialPage={1}
                    tabBarUnderlineStyle={styles.underline}
                    tabBarBackgroundColor={'green'}
                    tabBarActiveTextColor={'yellow'}
                    tabBarTextStyle={{fontSize:26}}
                    // scrollWithoutAnimation={Boolean(true)}
                >
                    <View tabLabel='Tab #1' style={styles.flexBox}>
                        <Text>1</Text>
                        {!!this.state.scrollText&&<Text>onChangeTab => {this.state.scrollText}</Text>}
                    </View>
                    <View tabLabel='Tab #2' style={styles.flexBox}>
                        <Text>2</Text>
                        {!!this.state.scrollText&&<Text>onChangeTab => {this.state.scrollText}</Text>}
                    </View>
                    <View tabLabel='Tab #3' style={styles.flexBox}>
                        <Text>3</Text>
                        {!!this.state.scrollText&&<Text>onChangeTab => {this.state.scrollText}</Text>}
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
    render(){
        const {navigator, title} = this.props;
        const boxes = [
            {
                title: '使用reactNativeScrollableTabView插件',
                animatedContent: this._renderTabView(),
            },
        ]

        return(
            <View style={styles.container}>
                <Header
                    title={title}
                    showArrow={Boolean(true)}
                    navigator={navigator}
                />
                <ScrollView
                    vertical={Boolean(true)}
                    directionalLockEnabled={Boolean(true)}
                    showsHorizontalScrollIndicator={Boolean(false)}
                    indicatorStyle="white"
                    style={styles.scroll}
                >
                    {
                        boxes.map((item, index) => (
                            <Box
                                key={`box_plugins_${index}`}
                                title={item.title}
                                isHide={Boolean(true)}
                                animatedContent={item.animatedContent}
                            />
                        ))
                    }
                </ScrollView>


            </View>
        )
    }
}
