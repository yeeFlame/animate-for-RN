/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/21 19:59:40
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/21 19:59:58
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


import MyScrollTabView from './myScrollTabBar';

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

});

export default class MySTBDemo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const d = (
            <MyScrollTabView test="1">
                <View tabLabel="tab #1"/>
                <View tabLabel="tab #2"/>
                <View tabLabel="tab #3"/>
            </MyScrollTabView>
        )

        const {navigator, title} = this.props;
        const boxes = [
            {
                title: '自定义scrollTabBar',
                animatedContent: d,
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
