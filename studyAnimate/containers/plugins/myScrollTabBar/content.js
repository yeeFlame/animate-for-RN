/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/22 11:33:26
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/22 11:33:43
*/


import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabContainer:{
        height: 42,
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
    },
    flexBox:{
        width:width,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
});

export default class Content extends Component {
    _scrollView = null;
    _currentOffsetX = 0;
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
        this._dragToScroll = this._dragToScroll.bind(this);
        this._scrollToPage = this._scrollToPage.bind(this);


        this.props.syncGoToFunc(this._scrollToPage,'content');
    }
    _dragToScroll(i, pageWidth){
        if(i === this._currentOffsetX){
            // console.log('currentPage', i);
            this.setState({
                currentPage:i ,
            });
            this.props.goToPage(i);
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
            currentPage:i ,
        });
        this.props.goToPage(i);

    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }


    render(){
        return (
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

                    <Text>currentPage {this.state.currentPage+1}</Text>

                </View>
                <View style={styles.flexBox}>
                    <Text>2</Text>
                    <Text>currentPage {this.state.currentPage+1}</Text>
                </View>
                <View style={styles.flexBox}>
                    <Text>3</Text>
                    <Text>currentPage {this.state.currentPage+1}</Text>
                </View>
            </ScrollView>
        );
    }


    componentDidMount(){
        console.log('content');
    }
}
