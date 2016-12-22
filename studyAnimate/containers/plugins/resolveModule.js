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
    Animated,
    Easing,
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
    tabContainer:{
        height: 80,
        width: width,
        backgroundColor: 'white',
        // flexDirection: 'row',
    },
    tabView:{
        flex: 1,
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarUnderLine:{
        height: 10,
        backgroundColor:'#ee735c',
        width: 60,
        borderRadius: 10,
    }
});

export default class ResolveModule extends Component {

    _scrollView =null;
    _currentOffsetX = 0;
    _tabBarPosition = [];
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            tarBarPosition: new Animated.Value(0),
        }
        this._renderScrollViewDrag = this._renderScrollViewDrag.bind(this);
        this._scrollToPage = this._scrollToPage.bind(this);
        this._dragToScroll = this._dragToScroll.bind(this);

        this._renderScrollViewTab = this._renderScrollViewTab.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.moveToPosition = this.moveToPosition.bind(this);
        this.setPosition();
    }

    setPosition(){
        let underlineWidth = 60;
        let tabBarWidth = width / 3;
        let pLeft = (tabBarWidth - underlineWidth) / 2;

        for(let i=0;i<3;i++){
            this._tabBarPosition.push(pLeft + i*tabBarWidth);
        }
        // this.setState({
        //     tarBarPosition:this._tabBarPosition[0],
        // })
        this.state.tarBarPosition.setValue(0);
        // this.state.tarBarPosition = this._tabBarPosition[0];
    }

    moveToPosition(position){
        // console.log(position)
        // this.state.tarBarPosition.setValue(0);
        // Animated.decay(
        //     this.state.tarBarPosition,
        //     {
        //         toValue: position,
        //         velocity: 1,
        //         deceleration: 0.997
        //     }
        // ).start()
        //

        Animated.timing(
             this.state.tarBarPosition,
            {
                toValue: position,
                duration: 300,
                easing: Easing.easeIneaseOut,
            }
        ).start();
    }

    _dragToScroll(i, pageWidth){
        if(i === this._currentOffsetX){
            // console.log('currentPage', i);
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
                        // console.log(offsetX / width);
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

    _renderScrollViewTab(){
        // console.log(this._tabBarPosition);

        return(
            <View style={styles.animateView}>
                <View style={styles.tabContainer}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.tabView}>
                            <TouchableOpacity
                                underlayColor={'transparent'}
                                onPress={()=>{
                                    this.moveToPosition(0)
                                    // this.setState({
                                    //     tarBarPosition:this._tabBarPosition[0],
                                    // })
                                }}
                            >
                                <Text>123</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tabView}>
                            <TouchableOpacity
                                underlayColor={'transparent'}
                                onPress={()=>{
                                    this.moveToPosition(1)
                                    // this.setState({
                                    //     tarBarPosition:this._tabBarPosition[1],
                                    // })
                                }}
                            >
                                <Text>456</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tabView}>
                            <TouchableOpacity
                                underlayColor={'transparent'}
                                onPress={()=>{
                                    this.moveToPosition(2)
                                    // this.setState({
                                    //     tarBarPosition:this._tabBarPosition[2],
                                    // })
                                }}
                            >
                                <Text>789</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Animated.View style={[styles.tabBarUnderLine,{
                        transform:[
                            {translateX: this.state.tarBarPosition.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: [this._tabBarPosition[0], this._tabBarPosition[1],this._tabBarPosition[2]]
                            })}
                            // {translateX: this.state.tarBarPosition}
                        ]
                    }]}/>
                </View>
            </View>
        );
    }

    componentWillMount(){

    }

    render(){
        const {navigator, title} = this.props;
        const boxes = [
            {
                title: 'scrollView的scrollTo',
                animatedContent: this._renderScrollViewDrag(),
            },
            {
                title: 'tabBar',
                animatedContent: this._renderScrollViewTab(),
            }
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
