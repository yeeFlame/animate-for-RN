/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/20 11:15:05
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/20 11:15:12
*/


import React,{Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Header from '../Header';
import Box from '../Box';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    scroll: {
        flex: 1,
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
        width:width,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
    underline:{
        backgroundColor:'red',
    },
});

export default class ResolveModule extends Component {

    _scrollView =null;
    _currentOffsetX = 0;
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        }
        this._renderScrollViewDrag = this._renderScrollViewDrag.bind(this);
        this._scrollToPage = this._scrollToPage.bind(this);
        this._dragToScroll = this._dragToScroll.bind(this);
    }
    _dragToScroll(i, pageWidth){
        if(i === this._currentOffsetX){
            console.log('currentPage', i);
            this.setState({
                currentPage:i + 1,
            });
        }
        this._currentOffsetX = i;
    }

    _scrollToPage(i){
        this._scrollView.scrollTo({
            x: i * width,
            y: 0,
            animated: true
        });
        this.setState({
            currentPage:i + 1,
        });
    }

    _renderScrollViewDrag(){
        return (
            <View style={styles.animateView}>
                <ScrollView
                    ref={(c) => {this._scrollView = c}}
                    style={{flex:1, width:width}}
                    horizontal
                    keyboardDismissMode="on-drag"
                    scrollEventThrottle={16}
                    scrollsToTop={false}
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled
                    automaticallyAdjustContentInsets={false}
                    pagingEnabled={true}
                    onScroll={(e) => {
                        const offsetX = e.nativeEvent.contentOffset.x;
                        console.log(offsetX / width);
                        this._dragToScroll(offsetX / width, width);
                    }}
                >
                    <View style={styles.flexBox}>
                        <Text>1</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(1);
                            }}
                        >
                            <Text>Scroll to page2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(2)
                            }}
                        >
                            <Text>Scroll to page3</Text>
                        </TouchableOpacity>
                        <Text>currentPage {this.state.currentPage}</Text>

                    </View>
                    <View style={styles.flexBox}>
                        <Text>2</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(0)
                            }}
                        >
                            <Text>Scroll to page1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(2)
                            }}
                        >
                            <Text>Scroll to page3</Text>
                        </TouchableOpacity>
                        <Text>currentPage {this.state.currentPage}</Text>
                    </View>
                    <View style={styles.flexBox}>
                        <Text>3</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(0)
                            }}
                        >
                            <Text>Scroll to page1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this._scrollToPage(1);
                            }}
                        >
                            <Text>Scroll to page2</Text>
                        </TouchableOpacity>
                        <Text>currentPage {this.state.currentPage}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
    render(){
        const {navigator, title} = this.props;
        const boxes = [
            {
                title: 'scrollView的scrollTo',
                animatedContent: this._renderScrollViewDrag(),
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
